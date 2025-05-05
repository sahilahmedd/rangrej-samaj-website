// import { NextResponse } from "next/server" 

// export async function POST(request: Request) {
//   try {
//     const data = await request.json()

//     // Validate required fields
//     if (!data.name || !data.email || !data.message) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
//     }

//     // In a real implementation, you would:
//     // 1. Send an email notification
//     // 2. Store the contact request in a database
//     // 3. Possibly trigger a notification to admins

//     // For now, we'll just simulate a successful response
//     return NextResponse.json({ success: true, message: "Contact form submitted successfully" }, { status: 200 })
//   } catch (error) {
//     console.error("Error processing contact form:", error)
//     return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
//   }
// }


import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, subject, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("Contact form data received:", data);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const recipients = [
      process.env.ADMIN_EMAIL,
      process.env.SECRETARY_EMAIL,
      email, // send confirmation to user too
    ];

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>Contact Form Submission</title>
          <style>
            body {
              font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
              background-color: #faf8f5;
              padding: 0;
              margin: 0;
            }
            .email-container {
              max-width: 600px;
              margin: 30px auto;
              background-color: #fff;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
              overflow: hidden;
            }
            .header {
              background: linear-gradient(135deg, #a855f7, #ec4899, #f59e0b);
              padding: 30px 20px;
              text-align: center;
              color: #fff;
            }
            .logo {
              width: 50px;
              height: 50px;
              border-radius: 20%;
              margin-bottom: 10px;
            }
            .title {
              font-size: 22px;
              font-weight: 600;
              margin: 0;
              letter-spacing: 1px;
            }
            .subtitle {
              font-size: 14px;
              opacity: 0.9;
              margin-top: 5px;
            }
            .content {
              padding: 25px 30px;
              color: #333;
              font-size: 15px;
              line-height: 1.6;
            }
            .content p {
              margin: 12px 0;
            }
            .label {
              font-weight: bold;
              color: #555;
            }
            .footer {
              background-color: #f4f4f4;
              padding: 15px 20px;
              font-size: 12px;
              color: #777;
              text-align: center;
              border-top: 1px solid #e0e0e0;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <img alt="Rangrej Logo" src="https://i.ibb.co/fdYpQ34k/logo.png" class="logo" />
              <h1 class="title">Rangrez Community</h1>
              <p class="subtitle">Contact Form Submission</p>
            </div>
            <div class="content">
              <p><span class="label">Name:</span> ${name}</p>
              <p><span class="label">Email:</span> ${email}</p>
              <p><span class="label">Phone:</span> ${phone || "Not provided"}</p>
              <p><span class="label">Subject:</span> ${subject || "No subject"}</p>
              <p><span class="label">Message:</span></p>
              <p>${message.replace(/\n/g, "<br/>")}</p>
            </div>
            <div class="footer">
              You are receiving this message because someone submitted your contact form on the Rangrej Community website.
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: recipients.join(","),
      subject: subject || "New Contact Form Submission",
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
