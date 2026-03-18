

# 🏡 **Habita — Property & Housing Management Platform (SaaS MVP)**

🔗 **Live Application:**
[https://habita-phi.vercel.app/](https://habita-phi.vercel.app/)

---

## 🌍 **Product Vision**

**Habita** is a modern **property management SaaS platform** designed to simplify how **landlords, tenants, and property managers** discover, manage, and communicate around housing.

Built as a **scalable MVP**, Habita focuses on solving real-world inefficiencies in property management using clean UI, modular architecture, and backend-ready integrations.

---

## 🚨 **Problem Statement**

In many rental ecosystems (especially in emerging markets):

* Property discovery is **fragmented and inefficient**
* Communication between landlords and tenants is **unstructured**
* Property management tools are either **too complex or nonexistent**
* There is **no centralized platform** for managing listings, conversations, and tenant interactions

---

## 💡 **Solution (Habita)**

Habita provides a **centralized, intuitive platform** where:

* 🏠 Landlords can **list and manage properties**
* 🔍 Tenants can **explore and view listings**
* 💬 Users can **communicate via a built-in messaging system**
* 📊 Future expansion supports **analytics, payments, and automation**

---

## 👤 **User Stories (MVP Focus)**

### 🧑‍💼 Landlord

> “As a landlord, I want to list and manage my properties so I can reach potential tenants easily.”

✔ View landlord profile
✔ Manage property listings
✔ Access tenant interactions

🔗 [https://habita-phi.vercel.app/landlords/lls](https://habita-phi.vercel.app/landlords/lls)

---

### 🏠 Tenant / User

> “As a user, I want to view detailed property listings so I can make informed rental decisions.”

✔ View property details
✔ Explore layouts and pricing
✔ Interact with listings

🔗 [https://habita-phi.vercel.app/Properties/alala](https://habita-phi.vercel.app/Properties/alala)

---

### 💬 Messaging User

> “As a user, I want to communicate with landlords directly so I can ask questions and negotiate.”

✔ Inbox interface
✔ Conversation UI
✔ Real-time-ready structure

🔗 [https://habita-phi.vercel.app/Inbox/iiiw](https://habita-phi.vercel.app/Inbox/iiiw)

---

## ✨ **Core Features (MVP)**

* 🔐 Authentication UI (Login / Modal system)
* 🏠 Property listing interface
* 💬 Messaging & conversation system
* 🧩 Reusable UI component system
* 📱 Fully responsive design
* ⚡ Fast, optimized frontend deployment

---

## 🧠 **Tech Stack**

### Frontend

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **Tailwind CSS**

### Backend (Planned / Integrated Architecture)

* **Django + Django REST Framework**
* **PostgreSQL**
* **JWT Authentication**

### DevOps & Deployment

* **Vercel (Frontend Hosting)**
* **Docker (Containerization Ready)**
* **Nginx (Planned Reverse Proxy)**

---

## 🏗 **Architecture Overview**

```
habita/
│
├── frontend/   → Next.js + Tailwind + TypeScript
├── backend/    → Django REST API
├── components/ → Reusable UI system
└── docker/     → Deployment infrastructure
```

---

## 🧩 **Frontend Architecture Highlights**

* Component-driven design
* Clear client/server separation (`"use client"`)
* Scalable folder structure
* Reusable UI (Buttons, Modals, Forms)
* Clean Tailwind utility usage

---

## 🔌 **API Design (Backend-Ready)**

| Method | Endpoint             | Purpose             |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/login`    | User authentication |
| POST   | `/api/auth/register` | User onboarding     |
| GET    | `/api/properties`    | Fetch listings      |
| POST   | `/api/properties`    | Create property     |
| GET    | `/api/messages`      | Fetch conversations |
| POST   | `/api/messages/send` | Send message        |

---

## 📊 **Why This Project Matters (For Recruiters & Investors)**

Habita demonstrates:

* ✅ **Real-world SaaS thinking (not just UI cloning)**
* ✅ **Scalable frontend architecture**
* ✅ **Backend-ready system design**
* ✅ **User-centric product thinking**
* ✅ **Production deployment workflow**

This is not just a project — it’s a **foundation for a prop-tech startup**.

---

## 🚀 **Roadmap**

* 💳 Payment integration (Stripe / Paystack)
* 🔔 Notification system
* ⚡ Real-time messaging (WebSockets)
* 🧑‍💼 Role-based access (Admin / Landlord / Tenant)
* 📊 Analytics dashboard
* 🗓 Booking & reservation system

---

## ⚙️ **Local Development**

```bash
git clone https://github.com/olayenikanmichael-Dev/alx-project-nexus.git
cd alx-project-nexus/frontend

npm install
npm run dev
```

---

## 👨‍💻 **Author**

**Olayenikan Michael**
Full-Stack Software Engineer | Frontend Specialist | SaaS Builder

* Portfolio: (Add your link)
* GitHub: [https://github.com/poundsmichaelscode](https://github.com/poundsmichaelscode)
* LinkedIn: (Add your link)

---

## 🤝 **Opportunity**

I’m actively open to:

* Frontend / Fullstack roles
* Freelance projects
* Startup collaborations

---

## 📄 **License**

MIT License

---

## 🌟 **Final Note**

Habita is built as a **production-minded MVP**, combining **engineering discipline + product thinking** — the exact mindset required to build scalable SaaS platforms.

---


