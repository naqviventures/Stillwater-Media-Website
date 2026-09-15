import type { Metadata } from "next";
import BuildMyAudience from "./BuildMyAudience";

export const metadata: Metadata = {
  title: "Build My Audience — Size Your High-Net-Worth Audience | Stillwater Media",
  description:
    "Tell us who you sell to. Pick demographic, geographic, purchase and intent criteria across 14.6 million liquid-millionaire households and get a written audience brief from Stillwater Media.",
  alternates: { canonical: "/build-my-audience" },
  openGraph: {
    title: "Build My Audience | Stillwater Media",
    description:
      "Define your high-net-worth audience across four data layers and receive a written audience brief with a real count from our data partners.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <main style={{ background: "#000" }}>
      <BuildMyAudience />
    </main>
  );
}
