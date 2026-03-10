# 🌐 Personal Portfolio — Full Stack MERN Application

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-023430?style=for-the-badge&logo=mongodb)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

> A production-ready, full-stack personal portfolio built with the MERN stack — featuring a live React frontend, a deployed Node/Express backend API, MongoDB Atlas for persistent storage, and real-time email notifications via Gmail SMTP.

---

## 🚀 Live Demo

| Layer | URL |
|---|---|
| 🎨 Frontend | [bijoylaxmibehera.vercel.app](https://bijoylaxmibehera.vercel.app) |
| ⚙️ Backend API | [portfolio-backend-adkg.onrender.com](https://portfolio-backend-adkg.onrender.com) |

---

## 💡 Why This Project Stands Out

Most portfolio websites are just static HTML pages. This one is different — it has a **fully functional backend** that handles contact form submissions, stores messages in a **MongoDB Atlas** database, and sends **real-time email notifications** via Gmail SMTP using Nodemailer. The entire app is deployed across two platforms (Vercel + Render) and uses environment variables for secure configuration — just like a real production application.

---

## ✨ Features

The frontend delivers a modern, animated experience built with React (Vite), Tailwind CSS, and Framer Motion for smooth section transitions. The contact form connects to a real backend API — when a visitor submits the form, their message is validated, stored permanently in MongoDB, and triggers an instant email notification to the site owner. Toast notifications provide real-time feedback to the user. The entire app is fully responsive and accessible across all screen sizes.

---

## 🛠️ Tech Stack

### 🎨 Frontend
React (Vite), Tailwind CSS, Framer Motion, Lucide Icons, React Hot Toast

### ⚙️ Backend
Node.js, Express.js, MongoDB (via Mongoose), Nodemailer, CORS, dotenv

### ☁️ Deployment
Frontend on Vercel, Backend on Render, Database on MongoDB Atlas

---

## 📬 Contact Form Flow

Here's exactly what happens under the hood when a visitor submits the contact form:

```
User submits form
      ↓
Frontend validates inputs
      ↓
POST request sent to Express API
      ↓
Backend validates & sanitizes data
      ↓
Message saved to MongoDB Atlas
      ↓
Email notification sent via Gmail SMTP (Nodemailer)
      ↓
Success response returned → Toast shown to user
```

---

## 📁 Project Structure

```
Portfolio/
├── frontend/               # React (Vite) app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── sections/       # Page sections (Hero, About, Projects, Contact)
│   │   └── App.jsx
│   └── .env                # VITE_API_URL
│
└── backend/                # Express.js REST API
    ├── models/             # Mongoose schemas
    ├── routes/             # API route handlers
    ├── controllers/        # Business logic
    └── .env                # MONGO_URI, EMAIL credentials, PORT
```

---

## ⚙️ Local Setup

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB)
- Gmail account with App Password enabled

### 1. Clone the repository
```bash
git clone https://github.com/bijoy-laxmi-behera/Portfolio.git
cd Portfolio
```

### 2. Set up the Backend
```bash
cd backend
npm install
```

Create a `.env` file inside `/backend`:
```env
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
CLIENT_URL=http://localhost:5173
PORT=4000
```

Start the backend:
```bash
npm run dev
```

### 3. Set up the Frontend
```bash
cd ../frontend
npm install
```

Create a `.env` file inside `/frontend`:
```env
VITE_API_URL=http://localhost:4000
```

Start the frontend:
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🚀 Deployment

The frontend is deployed on **Vercel** (automatic deployments on every push to `main`). The backend is hosted on **Render** as a web service. The database runs on **MongoDB Atlas** (cloud-hosted). All sensitive credentials are managed via environment variables on each platform — no secrets are committed to the repository.

---

## 📸 Screenshots

> *(Add screenshots of the hero section, projects section, and contact form here!)*

---

## 🧠 What I Learned

Building this project gave me practical, hands-on experience with concepts that go beyond typical coursework, including connecting a React frontend to a live REST API using `fetch` and handling async state, designing and deploying a Node/Express backend with proper route and controller separation, working with MongoDB Atlas and Mongoose schemas in a cloud environment, implementing transactional email with Nodemailer and Gmail SMTP App Passwords, managing environment variables securely across development and production, and deploying a full-stack application across multiple cloud platforms (Vercel + Render).

---

## 🔮 Future Improvements

- Rate limiting & spam protection on the contact form
- Admin dashboard to view all messages
- Dark/light mode toggle
- Blog section with MDX support
- CI/CD pipeline integration

---

## 👩‍💻 Author

**Bijoy Laxmi Behera** — MERN Stack Developer & MCA Student

🌐 [bijoylaxmibehera.vercel.app](https://bijoylaxmibehera.vercel.app) &nbsp;|&nbsp; 💼 [LinkedIn](https://linkedin.com/in/bijoy-laxmi-behera) &nbsp;|&nbsp; 📧 bijoylaxmi.dev@gmail.com

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
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
