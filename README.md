# ⚡ CI/CD with Docker (React + Vite)

This is a **demo project** built with **React + Vite** to practice **Docker-based CI/CD pipeline setup**.  
The app itself is minimal — the focus is on **containerization and deployment automation**.

---

## 🚀 Tech Stack

- ⚛️ **React 19** – Frontend library  
- ⚡ **Vite 7** – Build tool  
- 🎨 **Tailwind CSS 4** – Styling  
- 🎞️ **Framer Motion** – Animations  
- 🐳 **Docker** – Containerization  
- 📦 **Nginx** – Serving production build  

---

## 📂 Project Setup

### Clone the Repository
```bash
git clone https://github.com/VansitaGajjar/CI_CD_with_Docker.git
cd CI_CD_with_Docker
npm install
npm run dev
```
The app will be available at: http://localhost:5173/

---

## 🐳 Docker Setup

Build Docker Image
```bash
docker build -t ci-cd-with-docker .
```

Run Docker Container
```bash
docker run -p 8080:80 ci-cd-with-docker
```
Now, open http://localhost:8080/ in your browser 🚀

---

## ⚡ CI/CD Goal
- This project is meant to demonstrate end-to-end CI/CD with:
  - ✅ Dockerized React app
  - ✅ Automated builds & tests (via GitHub Actions or any CI/CD tool)
  - ✅ Deployment with Nginx
 
  
