"use server"

interface ContactFormData {
  name: string
  lastName?: string
  email: string
  company?: string
  service?: string
  message?: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // In a real application, you would use a service like Resend, SendGrid, or Nodemailer
    // For now, we'll simulate the email sending
    console.log("[v0] Sending email to info@stillwatermedia.io with data:", formData)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would integrate with your email service
    // Example with fetch to a hypothetical email API:
    /*
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'info@stillwatermedia.io',
        subject: `New Contact Form Submission from ${formData.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name} ${formData.lastName || ''}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
          ${formData.service ? `<p><strong>Service Interest:</strong> ${formData.service}</p>` : ''}
          ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ''}
        `,
      }),
    })
    
    if (!response.ok) {
      throw new Error('Failed to send email')
    }
    */

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, message: "Failed to send email. Please try again." }
  }
}
