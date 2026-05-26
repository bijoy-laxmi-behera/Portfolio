import Contact from "../models/contactModel.js";
import { sendEmail } from "../utils/sendEmail.js";

export const sendMessage = async (req, res, next) => {
  try {
    let { name, email, message } = req.body;

    // =========================
    // Basic Required Validation
    // =========================
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // =========================
    // Trim Inputs
    // =========================
    name = name.trim();
    email = email.trim();
    message = message.trim();

    // =========================
    // Length Validation
    // =========================
    if (name.length > 100 || message.length > 1000) {
      return res.status(400).json({
        success: false,
        message: "Input too long",
      });
    }

    if (message.length < 5) {
      return res.status(400).json({
        success: false,
        message: "Message too short",
      });
    }

    // =========================
    // Email Format Validation
    // =========================
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // =========================
    // Store in Database
    // =========================
    await Contact.create({ name, email, message });

    // =========================
    // Send Immediate Response
    // =========================
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });

    // =========================
    // Background Email Sending
    // =========================
    const safeMessage = message
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    sendEmail({
      subject: "New Portfolio Contact Message",
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${safeMessage}</p>
      `,
    }).catch((err) => {
      console.error("Email failed:", err.message);
    });

  } catch (error) {
    next(error);
  }
};