# 🌐 Full Stack Portfolio (MERN)

<p align="center"> <img src="https://readme-typing-svg.herokuapp.com?size=26&duration=3000&color=8B5CF6&center=true&vCenter=true&width=800&lines=MERN+Stack+Developer;Full+Stack+Web+Application;Modern+Animated+Portfolio" /> </p>

A modern full-stack portfolio built using the MERN Stack.
Designed to showcase projects, skills, and enable direct contact via a secure backend-powered email system.

---

## 🚀 Live Demo

<p align="center"> <a href="https://bijoylaxmibehera.vercel.app"> <img src="https://img.shields.io/badge/Frontend-Vercel-black?style=for-the-badge&logo=vercel" /> </a> <a href="https://portfolio-backend-adkg.onrender.com"> <img src="https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" /> </a> </p>

Frontend: https://bijoylaxmibehera.vercel.app

Backend API: https://portfolio-backend-adkg.onrender.com

---

## 🛠 Tech Stack

### 🎨 Frontend
<p> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react" /> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" /> <img src="https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss" /> <img src="https://img.shields.io/badge/FramerMotion-black?style=for-the-badge&logo=framer" /> </p>

- React (Vite)
- Tailwind CSS
- Framer Motion
- Lucide Icons
- React Hot Toast

### ⚙ Backend
<p> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js" /> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express" /> <img src="https://img.shields.io/badge/MongoDB-023430?style=for-the-badge&logo=mongodb" /> </p>

- Node.js
- Express.js
- MongoDB (Mongoose)
- Nodemailer
- CORS
- dotenv

---

## ✨ Features

- Modern responsive UI
- Animated sections with Framer Motion
- Contact form with backend integration
- MongoDB message storage
- Email notifications via Gmail SMTP
- Environment variable-based configuration
- Clean modular backend structure

---

## 📬 Contact Form Flow

1. User submits form  
2. Backend validates input  
3. Message stored in MongoDB  
4. Email notification sent  
5. Success response returned  

---

## 🔐 Environment Variables

### Backend `.env`

```
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_app_password
CLIENT_URL=http://localhost:5173
PORT=4000
```

### Frontend `.env`

```
VITE_API_URL=http://localhost:4000
```

---

## ⚙️ Local Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/bijoy-laxmi-behera/Portfolio.git
cd Portfolio
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🚀 Deployment

- Backend deployed on Render
- Frontend deployed on Vercel
- MongoDB Atlas as database

---

## 📈 Future Improvements

- Rate limiting for contact form
- Spam protection
- Message dashboard
- Improved accessibility
- CI/CD integration

---

## 👩‍💻 Author

Bijoy Laxmi Behera  
MERN Stack Developer  

GitHub: https://github.com/bijoy-laxmi-behera  
LinkedIn: https://linkedin.com/in/bijoy-laxmi-behera 

---

## 📄 License

This project is open-source and available under the MIT License.
