# Sougata Halder - Portfolio Website

A modern, animated portfolio website built with React.js, Tailwind CSS, and FastAPI backend.

## 🌟 Features

- **Modern Dark Theme** with teal/cyan accents
- **Beautiful Animations** - Smooth scroll, hover effects, fade-in transitions
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Working Contact Form** - Saves messages to MongoDB
- **Interactive Sections**: Hero, About, Projects, Skills, Experience, Achievements, Contact

## 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/portfolio/   # All portfolio components
│   │   ├── data/mock.js           # YOUR DATA - Edit this!
│   │   ├── App.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── server.py                  # FastAPI backend
│   └── requirements.txt
└── README.md
```

## 🚀 Quick Start

### Frontend Only (Static)

```bash
cd frontend
yarn install
yarn start
```

### Full Stack (with Contact Form)

```bash
# Backend
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001

# Frontend (new terminal)
cd frontend
yarn install
yarn start
```

## ✏️ Customize Your Data

Edit `/frontend/src/data/mock.js` to update:
- Personal info, photo, social links
- Projects, skills, education
- Experience, achievements

## 🌐 Deploy

**Vercel (Recommended)**
1. Push to GitHub
2. Import at vercel.com
3. Deploy!

**GitHub Pages**
```bash
yarn add gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d build"
yarn build && yarn deploy
```

---
Made with ❤️ by Sougata Halder
