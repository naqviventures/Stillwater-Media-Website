/**
 * Submission adapter for the Build My Audience page.
 *
 * The payload is shaped to match the site's existing contact form
 * (First name, Last name, Email, Company, Inquiry type, Message) so it goes
 * through the SAME handler the /contact page uses (sendContactEmail via Resend).
 * `brief` carries the structured criteria for anything downstream.
 */

import { sendContactEmail } from "@/lib/email"

export type AudienceBriefPayload = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  inquiryType: "Audience Brief";
  message: string; // human-readable brief, safe to drop into any email/CRM note
  brief: {
    ref: string;
    budget: string;
    notes: string;
    demographic: string | null;
    geographic: string | null;
    purchaseSignals: string | null;
    intent: string | null;
    startingUniverse: string;
    raw: Record<string, unknown>;
  };
};

export async function submitAudienceBrief(payload: AudienceBriefPayload): Promise<void> {
  const result = await sendContactEmail({
    name: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    company: payload.company,
    service: payload.inquiryType,
    message: payload.message,
  });
  if (!result?.success) {
    throw new Error(result?.message || "audience brief submit failed");
  }
}

/** Formats the brief as plain text for the contact form's Message field. */
export function briefAsText(
  s: Record<string, any>,
  layers: (string | null)[],
  ref: string,
  startingUniverse: string,
): string {
  const line = (k: string, v: string | null | undefined, empty = "—") => `${k}: ${v && v.trim() ? v : empty}`;
  return [
    `AUDIENCE BRIEF ${ref}`,
    line("Company", s.company || s.name),
    line("Contact", `${s.name} <${s.email}>`),
    line("Monthly media budget", s.budget),
    line("Starting universe (households, Spectrem)", startingUniverse),
    "",
    line("Layer 1 — Demographic", layers[0], "All liquid-millionaire households"),
    line("Layer 2 — Geographic", layers[1], "Nationwide"),
    line("Layer 3 — Purchase signals", layers[2], "No purchase filter"),
    line("Layer 4 — Intent", layers[3], "No intent filter"),
    "",
    line("Notes", s.notes),
  ].join("\n");
}
