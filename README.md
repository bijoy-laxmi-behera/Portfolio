# 🌐 Personal Portfolio — Full Stack MERN Application

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-023430?style=for-the-badge&logo=mongodb)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

> A production-ready full-stack portfolio built with the MERN stack — featuring a deployed React frontend, Node/Express backend API, MongoDB Atlas for persistent storage, and real-time email notifications via Gmail SMTP.

---

## 🚀 Live Demo

| Layer | URL |
|---|---|
| 🎨 Frontend | [bijoylaxmibehera.vercel.app](https://bijoylaxmibehera.vercel.app) |
| ⚙️ Backend API | [portfolio-backend-adkg.onrender.com](https://portfolio-backend-adkg.onrender.com) |

---

## ✨ Features

A modern, animated UI built with React and Framer Motion, a fully functional contact form connected to a real backend API, messages stored in MongoDB Atlas, instant email notifications via Nodemailer, and a fully responsive design across all screen sizes.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React (Vite), Tailwind CSS, Framer Motion, Lucide Icons |
| Backend | Node.js, Express.js, MongoDB (Mongoose), Nodemailer |
| Deployment | Vercel (frontend), Render (backend), MongoDB Atlas (DB) |

---

## 📬 Contact Form Flow

```
User submits form → Express API validates input
      ↓
Message saved to MongoDB Atlas
      ↓
Email notification sent via Gmail SMTP
      ↓
Success toast shown to user
```

---

## ⚙️ Local Setup

**1. Clone the repository**
```bash
git clone https://github.com/bijoy-laxmi-behera/Portfolio.git
cd Portfolio
```

**2. Backend**
```bash
cd backend && npm install
```
Create a `.env` file:
```env
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
CLIENT_URL=http://localhost:5173
PORT=4000
```
```bash
npm run dev
```

**3. Frontend**
```bash
cd ../frontend && npm install
```
Create a `.env` file:
```env
VITE_API_URL=http://localhost:4000
```
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser.

---

## 📸 Screenshots

> *(Add screenshots of the hero section, projects section, and contact form here!)*

---

## 🔮 Future Improvements

Rate limiting & spam protection, an admin dashboard for messages, dark/light mode toggle, and CI/CD pipeline integration.

---

## 👩‍💻 Author

**Bijoy Laxmi Behera** — MERN Stack Developer & MCA Student

🌐 [bijoylaxmibehera.vercel.app](https://bijoylaxmibehera.vercel.app) &nbsp;|&nbsp; 💼 [LinkedIn](https://linkedin.com/in/bijoy-laxmi-behera) &nbsp;|&nbsp; 📧 bijoylaxmi.dev@gmail.com

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
