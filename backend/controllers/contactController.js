import Contact from "../models/contactModel.js";
import { sendEmail } from "../utils/sendEmail.js";

export const sendMessage = async (req, res, next) => {
  try {
    let { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    name = name.trim();
    email = email.trim();
    message = message.trim();

    if (name.length > 100 || message.length > 1000) {
      return res.status(400).json({
        success: false,
        message: "Input too long",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    await Contact.create({ name, email, message });

    try {
      await sendEmail({
        subject: "New Portfolio Contact Message",
        html: `
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p>${message}</p>
        `,
      });
    } catch (mailError) {
      console.error("Email failed:", mailError.message);
    }

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    next(error);
  }
};