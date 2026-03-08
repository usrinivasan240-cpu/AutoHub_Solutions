import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  project: z.string().min(10),
});

// Rate limiting using simple in-memory store
// In production, use Redis or similar
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Validate request body
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.issues },
        { status: 400 }
      );
    }

    const { name, email, phone, project } = result.data;

    // Honeypot check (if implemented in form)
    if (body.website) {
      // Silent fail for bots
      return NextResponse.json({ success: true });
    }

    // Email template for notification to you
    const notificationEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 20px; }
    .field label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
    .field div { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #667eea; }
    .project-details { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #764ba2; white-space: pre-wrap; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 14px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📧 New Contact Form Submission</h2>
      <p>You have received a new message from your startup website contact form.</p>
    </div>
    <div class="content">
      <div class="field">
        <label>Full Name:</label>
        <div>${name}</div>
      </div>
      <div class="field">
        <label>Email Address:</label>
        <div><a href="mailto:${email}" style="color: #667eea;">${email}</a></div>
      </div>
      ${phone ? `
      <div class="field">
        <label>Phone Number:</label>
        <div><a href="tel:${phone}" style="color: #667eea;">${phone}</a></div>
      </div>
      ` : ''}
      <div class="field">
        <label>Project Details:</label>
        <div class="project-details">${project}</div>
      </div>
      <div class="field">
        <label>Submitted:</label>
        <div>${new Date().toLocaleString()}</div>
      </div>
      <div class="field">
        <label>IP Address:</label>
        <div>${ip}</div>
      </div>
      <div class="footer">
        <p><strong>Please reply directly to this email to contact the sender.</strong></p>
        <p>Best Regards,<br>Your Website Contact System</p>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    // Email template for auto-reply to user
    const autoReplyHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Autohub Solution</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    .greeting { font-size: 18px; margin-bottom: 20px; }
    .message { margin-bottom: 20px; }
    .copy { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e0e0e0; margin: 20px 0; }
    .copy h3 { color: #667eea; margin-top: 0; }
    .field { margin-bottom: 15px; }
    .field label { font-weight: bold; color: #555; }
    .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 14px; color: #666; }
    .contact-info { background: #e7f3ff; padding: 15px; border-radius: 8px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 Thank You for Contacting Autohub Solution!</h1>
    </div>
    <div class="content">
      <p class="greeting">Hi ${name},</p>
      <p class="message">Thank you for reaching out to us! We've received your message and we're excited to help you with your project.</p>
      
      <p class="message"><strong>We'll get back to you within 24-48 hours.</strong> In the meantime, here's a copy of your submission:</p>
      
      <div class="copy">
        <h3>📋 Your Message Details</h3>
        <div class="field">
          <label>Full Name:</label> ${name}
        </div>
        <div class="field">
          <label>Email:</label> ${email}
        </div>
        ${phone ? `
        <div class="field">
          <label>Phone:</label> ${phone}
        </div>
        ` : ''}
        <div class="field">
          <label>Project Details:</label>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${project}</div>
        </div>
      </div>
      
      <div class="contact-info">
        <strong>📞 Working Hours:</strong><br>
        Everyday 6 PM – 12 AM<br>
        <br>
        <strong>📧 Email:</strong> autohubsolution777@gmail.com
      </div>
      
      <p class="message">If you have any urgent questions, feel free to reach out to us directly at autohubsolution777@gmail.com.</p>
      
      <div class="footer">
        <p>Best regards,<br><strong>Autohub Solution Team</strong></p>
        <p style="margin-top: 10px;">
          <a href="https://x.com/AutohubBot" style="color: #667eea; text-decoration: none;">Twitter/X</a> | 
          <a href="https://www.instagram.com/autohub_solution777" style="color: #667eea; text-decoration: none;">Instagram</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    // Send email to you (notification)
    await resend.emails.send({
      from: "Autohub Contact <onboarding@resend.dev>",
      to: "autohubsolution777@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: notificationEmailHtml,
    });

    // Send auto-reply to user
    await resend.emails.send({
      from: "Autohub Solution <onboarding@resend.dev>",
      to: email,
      subject: "Thank You for Contacting Autohub Solution",
      html: autoReplyHtml,
    });

    console.log("Contact form submission emailed:", {
      name,
      email,
      phone,
      timestamp: new Date().toISOString(),
      ip,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Optionally handle GET requests for health checks
export async function GET() {
  return NextResponse.json({ status: "Contact API is running" });
}
