
# IdentityHub

A full-stack web application built with React, Node.js, Express, and MongoDB.

IdentityHub brings together a modern React frontend and an Express-based backend, with MongoDB for data persistence.

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React 19, Vite, Tailwind CSS |
| Backend | Node.js, Express 5 |
| Database | MongoDB, Mongoose |
| Routing | React Router |
| API Communication | Axios |
| Internationalization | i18next, react-i18next |
| UI & Animations | Framer Motion, AOS, React Icons |
| Development Tools | Git, GitHub, ESLint, Nodemon |

## Project Structure

```text
IdentityHub/
├── backend/
│   ├── connections/
│   ├── controller/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    ├── package.json
    └── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (local instance or MongoDB Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/HamzaRathore/IdentityHub.git
cd IdentityHub
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Configure the environment variables required by the backend before starting the server.

```bash
npm start
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite.

## Available Commands

### Frontend

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

### Backend

```bash
npm start
```

## Development Notes

The project uses a separate frontend and backend architecture.

- React powers the user interface.
- Express handles backend HTTP requests.
- Mongoose provides MongoDB data modeling.
- Axios supports client-server communication.
- React Router supports frontend navigation.
- i18next provides localization tooling.

## Project Status

Personal full-stack development project.

## Author

**Muhammad Hamza**

Full Stack Developer | MERN Stack

- GitHub: [HamzaRathore](https://github.com/HamzaRathore)
- LinkedIn: [hamza-rathore](https://www.linkedin.com/in/hamza-rathore)
