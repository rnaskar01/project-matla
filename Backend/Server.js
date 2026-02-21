require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/contact", async (req, res) => {
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

    // 1️⃣ Mail to Company
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>whatsapp:</strong> ${whatsapp}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2️⃣ Thank You Mail to Customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting MATLA",
      html: `
      <div style="background:#f4f4f4; padding:30px; font-family:Arial, sans-serif;">
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
       attachments: [
        {
          filename: "logo.png",
          path: path.join(__dirname, "../Frontent/Image/logo.png"),
          cid: "matlalogo",
        },
      ],
    });

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
