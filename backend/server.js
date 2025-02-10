const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

app.post("/send-email", async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Configure nodemailer with your email
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL, // Your email
            pass: process.env.PASSWORD, // Your email password or app password
        },
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: "your_email@example.com", // Your receiving email
        subject: `New Contact Form Submission: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "Email sent successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error sending email", error });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
