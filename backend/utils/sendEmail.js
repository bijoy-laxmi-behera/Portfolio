import nodemailer from "nodemailer";

export const sendEmail = async ({ subject, html }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.verify();

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject,
      html,
    });

  } catch (error) {
    console.error("Email sending failed:", error.message);
    throw new Error("Email service failed");
  }
};