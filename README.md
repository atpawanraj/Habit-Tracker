# 75 Hard Tracker

> A modern, open-source, offline-first habit and challenge tracking application built with **React**, **Tailwind CSS**, and **Capacitor**.

---

## 📌 Project Overview

The **75 Hard Tracker** is a free and open-source web and mobile application designed to help users track their progress through the rigorous **75 Hard** challenge. While pre-configured with the official 75 Hard ruleset, the platform's underlying engine is designed to be fully customizable for any multi-day habit or wellness challenge (e.g., 30-day, 60-day, or custom challenges).

All user data remains **100% private and offline-first**, stored directly on the user's device without mandatory account creation or third-party cloud lock-in.

---

## 🚀 Key Features (Planned & Roadmap)

> [!NOTE]
> The project is currently in the **Documentation & Architectural Planning** phase. All features below are clearly cataloged as **Planned** as per our [ROADMAP.md](docs/ROADMAP.md).

- 📋 **75 Hard Default Checklist:** Full tracking for the 6 core daily rules:
  - 45-minute Workout 1
  - 45-minute Outdoor Workout 2 (regardless of weather)
  - 1 Gallon (3.8L) Water Intake
  - Follow Diet (Zero cheat meals, zero alcohol)
  - Read 10 Pages (Non-fiction / personal growth)
  - Daily Progress Photo
- 🎯 **Custom Challenge Engine:** Add, edit, remove, or customize daily habits and adjust challenge length (e.g., 30, 60, 75, 100 days).
- 📊 **Visual Analytics & Charts:** Interactive line graphs powered by **Recharts** displaying daily completion rate trends over time.
- 🔥 **Streak & Continuity Tracking:** Real-time calculation of current streaks, longest streaks, and daily completion percentages.
- 📅 **Interactive Calendar & History:** Visual 75-day grid and monthly calendar to inspect and review past daily logs.
- 🔒 **Offline-First & Private:** Instant data persistence via `localStorage` with full JSON backup export/import capabilities.
- 📱 **Cross-Platform:** Responsive web experience for desktop/mobile browsers, and packaged as an **Android APK** using **Capacitor**.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | [React](https://react.dev/) (v18+) | Component-driven, declarative user interface |
| **Build System** | [Vite](https://vitejs.dev/) | High-performance dev server and optimized production bundler |
| **Styling & Theme** | [Tailwind CSS](https://tailwindcss.com/) | Modern utility-first styling with responsive tokens and dark mode |
| **Data Visualization** | [Recharts](https://recharts.org/) | Composable, responsive SVG charting for completion rate trends |
| **Data Persistence** | `localStorage` (Initial) | Local, zero-latency offline storage with schema abstraction |
| **Mobile Runtime** | [Capacitor](https://capacitorjs.com/) | Cross-platform native wrapper to build and distribute Android APKs |
| **Iconography** | [Lucide React](https://lucide.dev/) | Clean, lightweight SVG icons |
| **Testing** | [Vitest](https://vitest.dev/) & React Testing Library | Fast unit and component test runner |

---

## 📚 Project Documentation

Detailed design specifications and contributor guides are located in the [`docs/`](docs/) directory:

- 📄 **[Product Requirements Document (PRD)](docs/PRD.md):** Product goals, target user personas, functional specifications, non-goals, and definition of done.
- 🏛️ **[System Architecture](docs/ARCHITECTURE.md):** High-level component architecture, tech stack rationale, data models, storage adapter design, and Capacitor packaging.
- 🤝 **[Development & Contribution Guide](docs/DEVELOPMENT.md):** Complete development lifecycle: GitHub issue → feature branch → implementation → testing → Conventional Commits → pull request → merge → automated deployment.
- 🗺️ **[Project Roadmap](docs/ROADMAP.md):** 12-phase execution plan from foundation setup through habit engine, analytics, testing, web deployment, and Android release.

---

## 💻 Getting Started (Planned Local Setup)

> [!TIP]
> Application code implementation will begin in **Phase 1**. The instructions below outline how developers will run the project once initialized.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or v20.x LTS)
- [npm](https://www.npmjs.com/) (v9+)
- [Git](https://git-scm.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/atpawanraj/Habit-Tracker.git
cd Habit-Tracker
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Run Unit Tests & Linting
```bash
npm run test
npm run lint
```

### 5. Build for Production
```bash
npm run build
```

---

## 📱 Android Packaging (Planned - Phase 11)

Once the web application is built, Capacitor will sync static web assets to the native Android environment:

```bash
# Sync web build to Android project
npx cap sync android

# Open Android Studio to build APK
npx cap open android
```

---

## 🌿 Contributing Workflow

We welcome open-source contributions! To ensure high quality and smooth collaboration, we follow a strict issue-driven process:

1. **Find or Open an Issue:** Discuss the proposed change on GitHub first.
2. **Create a Feature Branch:** `git checkout -b feature/issue-number-description`
3. **Follow Commit Standards:** Use [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat:`, `fix:`, `docs:`).
4. **Submit a Pull Request:** Open a PR against `main` referencing the issue number.

For detailed guidelines, read our [Development Workflow Guide](docs/DEVELOPMENT.md).

---

## ⚖️ License & Disclaimer

### License
This project is open-source and licensed under the [MIT License](LICENSE).

### Health & Fitness Disclaimer
*The 75 Hard challenge is a mental toughness and physical discipline program created by Andy Frisella. This tracker is an independent, community-driven open-source project and is not officially affiliated with, endorsed by, or sponsored by Andy Frisella or the 44Seven Media company. Always consult with a qualified healthcare professional before beginning any intensive fitness or dietary regimen.*
