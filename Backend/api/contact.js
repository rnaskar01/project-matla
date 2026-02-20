import nodemailer from "nodemailer";
require("dotenv").config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, whatsapp, message } = req.body;

  // Basic validation
  if (!name || !email || !whatsapp || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail to company
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Thank you mail
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting MATLA",
      html: `
        <        <div style="background:#f4f4f4; padding:30px; font-family:Arial, sans-serif;">
          <div style="max-width:600px; margin:auto; background:#ffffff; padding:30px; border-radius:10px; box-shadow:0 5px 15px rgba(0,0,0,0.1); text-align:center;">

            <img src="cid:matlalogo" width="120" style="margin-bottom:20px;" />

            <h2 style="color:#8B0000;">Thank You for Contacting MATLA</h2>

            <p style="text-align:left;">Dear <strong>${name}</strong>,</p>

            <p style="text-align:left;">
              We sincerely appreciate you reaching out to us.
              Your message has been successfully received.
            </p>

            <p style="text-align:left;">
              Our team will review it carefully and respond within <strong>24 hours</strong>.
            </p>

            <p style="text-align:left;">
              At MATLA, we are committed to delivering quality and building meaningful connections.
            </p>

            <br/>

            <p style="text-align:left;white-space:nowrap;">
              Warm regards,<br/>
              <strong>Team MATLA</strong><br/>
              Phone: +91 8617505480 / <br/>
              +91 9433703604<br/>
            </p>

          </div>
        </div>
      `,
    });

    return res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong!" });
  }
}