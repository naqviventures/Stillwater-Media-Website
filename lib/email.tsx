"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  lastName?: string
  email: string
  company?: string
  service?: string
  message?: string
}

interface ApplicationFormData {
  name: string
  email: string
  company: string
  website?: string
  industry: string
  monthlySpend: string
  primaryGoal: string
  currentChannels: string[]
  cacRange?: string
  roasRange?: string
  aovRange?: string
  ltvRange?: string
  salesCycle?: string
  timeline: string
  notes?: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Stillwater Media <info@stillwatermedia.io>",
      to: ["info@stillwatermedia.io"],
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Georgia', serif; color: #1a1a1a; line-height: 1.6; }
              .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
              .header { border-bottom: 1px solid #e5e5e5; padding-bottom: 20px; margin-bottom: 30px; }
              .header h1 { font-size: 24px; font-weight: 400; margin: 0; letter-spacing: 0.5px; }
              .field { margin-bottom: 20px; }
              .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #737373; margin-bottom: 5px; }
              .field-value { font-size: 16px; color: #1a1a1a; }
              .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5; font-size: 12px; color: #737373; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              
              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${formData.name} ${formData.lastName || ''}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${formData.email}">${formData.email}</a></div>
              </div>
              
              ${formData.company ? `
                <div class="field">
                  <div class="field-label">Company</div>
                  <div class="field-value">${formData.company}</div>
                </div>
              ` : ''}
              
              ${formData.service ? `
                <div class="field">
                  <div class="field-label">Inquiry Type</div>
                  <div class="field-value">${formData.service}</div>
                </div>
              ` : ''}
              
              ${formData.message ? `
                <div class="field">
                  <div class="field-label">Message</div>
                  <div class="field-value">${formData.message.replace(/\n/g, '<br>')}</div>
                </div>
              ` : ''}
              
              <div class="footer">
                Submitted from stillwatermedia.io/contact
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return { success: false, message: "Failed to send email. Please try again." }
    }

    console.log("[v0] Email sent successfully:", data)
    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, message: "Failed to send email. Please try again." }
  }
}

export async function sendApplicationEmail(formData: ApplicationFormData) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Stillwater Media <info@stillwatermedia.io>",
      to: ["info@stillwatermedia.io"],
      replyTo: formData.email,
      subject: `New Partnership Application from ${formData.company}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Georgia', serif; color: #1a1a1a; line-height: 1.6; }
              .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
              .header { border-bottom: 1px solid #e5e5e5; padding-bottom: 20px; margin-bottom: 30px; }
              .header h1 { font-size: 24px; font-weight: 400; margin: 0; letter-spacing: 0.5px; }
              .section { margin-bottom: 30px; }
              .section-title { font-size: 13px; text-transform: uppercase; letter-spacing: 2px; color: #b8935f; margin-bottom: 15px; font-weight: 600; }
              .field { margin-bottom: 15px; }
              .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #737373; margin-bottom: 5px; }
              .field-value { font-size: 16px; color: #1a1a1a; }
              .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5; font-size: 12px; color: #737373; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Partnership Application</h1>
              </div>
              
              <div class="section">
                <div class="section-title">Contact Information</div>
                <div class="field">
                  <div class="field-label">Name</div>
                  <div class="field-value">${formData.name}</div>
                </div>
                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value"><a href="mailto:${formData.email}">${formData.email}</a></div>
                </div>
                <div class="field">
                  <div class="field-label">Company</div>
                  <div class="field-value">${formData.company}</div>
                </div>
                ${formData.website ? `
                  <div class="field">
                    <div class="field-label">Website</div>
                    <div class="field-value"><a href="${formData.website}">${formData.website}</a></div>
                  </div>
                ` : ''}
              </div>
              
              <div class="section">
                <div class="section-title">Business Details</div>
                <div class="field">
                  <div class="field-label">Industry</div>
                  <div class="field-value">${formData.industry}</div>
                </div>
                <div class="field">
                  <div class="field-label">Monthly Media Spend</div>
                  <div class="field-value">${formData.monthlySpend}</div>
                </div>
                ${formData.currentChannels.length > 0 ? `
                  <div class="field">
                    <div class="field-label">Current Channels</div>
                    <div class="field-value">${formData.currentChannels.join(', ')}</div>
                  </div>
                ` : ''}
              </div>
              
              <div class="section">
                <div class="section-title">Metrics</div>
                ${formData.cacRange ? `
                  <div class="field">
                    <div class="field-label">CAC</div>
                    <div class="field-value">${formData.cacRange}</div>
                  </div>
                ` : ''}
                ${formData.roasRange ? `
                  <div class="field">
                    <div class="field-label">ROAS/MER</div>
                    <div class="field-value">${formData.roasRange}</div>
                  </div>
                ` : ''}
                ${formData.aovRange ? `
                  <div class="field">
                    <div class="field-label">AOV</div>
                    <div class="field-value">${formData.aovRange}</div>
                  </div>
                ` : ''}
                ${formData.ltvRange ? `
                  <div class="field">
                    <div class="field-label">LTV</div>
                    <div class="field-value">${formData.ltvRange}</div>
                  </div>
                ` : ''}
                ${formData.salesCycle ? `
                  <div class="field">
                    <div class="field-label">Sales Cycle</div>
                    <div class="field-value">${formData.salesCycle}</div>
                  </div>
                ` : ''}
              </div>
              
              <div class="section">
                <div class="section-title">Goals & Timeline</div>
                <div class="field">
                  <div class="field-label">Primary Goal</div>
                  <div class="field-value">${formData.primaryGoal}</div>
                </div>
                <div class="field">
                  <div class="field-label">Timeline</div>
                  <div class="field-value">${formData.timeline}</div>
                </div>
                ${formData.notes ? `
                  <div class="field">
                    <div class="field-label">Additional Notes</div>
                    <div class="field-value">${formData.notes.replace(/\n/g, '<br>')}</div>
                  </div>
                ` : ''}
              </div>
              
              <div class="footer">
                Submitted from stillwatermedia.io/apply
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return { success: false, message: "Failed to send application. Please try again." }
    }

    console.log("[v0] Application email sent successfully:", data)
    return { success: true, message: "Application sent successfully!" }
  } catch (error) {
    console.error("[v0] Error sending application:", error)
    return { success: false, message: "Failed to send application. Please try again." }
  }
}
