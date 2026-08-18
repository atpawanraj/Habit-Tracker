# Product Requirements Document (PRD)

## Project: 75 Hard Tracker & Custom Habit Engine
- **Document Version:** 1.0.0
- **Status:** Draft / Planned
- **Target Initial Release:** v1.0.0 (MVP)
- **License:** Open Source (MIT)

---

## 1. Product Overview & Problem Statement

### 1.1 Overview
The **75 Hard Tracker** is a modern, open-source, offline-first web and mobile application designed to help individuals track their journey through the rigorous **75 Hard** mental toughness challenge. While the initial release focuses specifically on the strict rules and workflows of 75 Hard, the underlying core engine is designed to be fully customizable, allowing users to create, configure, and track arbitrary habit challenges (e.g., 30-day challenges, custom wellness routines).

### 1.2 Problem Statement
Many commercial habit trackers and 75 Hard logging apps suffer from:
1. **Aggressive Monetization:** Basic streak and photo tracking features locked behind expensive monthly paywalls.
2. **Account Requirements & Privacy Concerns:** Forcing users to create accounts and upload personal fitness/progress photos to proprietary third-party servers.
3. **Rigid Rule Sets:** Inability to tweak rules for personal recovery, injury modifications, or create custom ongoing challenges.
4. **Cluttered Interfaces:** Bloated with social feeds, advertisements, and irrelevant features that increase daily check-in friction.

### 1.3 Vision & Solution
Provide a fast, beautiful, transparent, and completely free open-source solution that:
- Runs natively in any modern browser and compiles to a native Android APK via Capacitor.
- Stores all data locally on the user's device by default (zero privacy leakage).
- Delivers rich data analytics (streak history, line charts, calendar heat maps) with zero subscription fees.
- Allows full customization of habits and challenge rules.

---

## 2. Goals & Success Metrics

### 2.1 Product Goals
- **Simplicity & Speed:** Allow users to complete their daily habit check-in in under 15 seconds.
- **Zero-Barrier Accessibility:** Works instantly without account registration, login screens, or internet connectivity.
- **Visual Motivation:** Provide clear visual feedback through progress rings, streak counters, and completion rate trend charts.
- **Extensibility:** Support custom habit definitions, custom challenge lengths (e.g., 30, 60, 75, 100 days), and customizable daily targets.
- **Cross-Platform:** Responsive web experience and installable Android package.

### 2.2 Success Metrics
- **Performance:** Sub-second page load time, 60 FPS UI transitions, Lighthouse performance score > 90.
- **Reliability:** 100% data persistence across browser restarts with resilient local storage handling and export/import capabilities.
- **Usability:** 100% responsive compatibility across mobile (360px+), tablet, and desktop screens.
- **Community:** Clear documentation enabling new open-source contributors to set up and contribute seamlessly.

---

## 3. Target User Personas

### Persona 1: The 75 Hard Challenger ("Alex")
- **Profile:** Dedicated to mental discipline and fitness; embarking on the official 75 Hard challenge.
- **Needs:** Strict compliance tracking (2 workouts [1 outdoor], 1 gallon water, 10 pages reading, diet adherence, no alcohol/cheat meals, progress photo), streak counter, and visual progress over 75 days.
- **Pain Points:** Frustrated by subscription prompts on existing 75 Hard apps; wants a dependable daily checklist that works offline at the gym.

### Persona 2: The Flexible Habit Builder ("Sam")
- **Profile:** Wants to build positive daily habits (e.g., meditation, hydration, coding practice) over a 30-day or custom timeframe.
- **Needs:** Ability to modify default tasks, add custom habit metrics (e.g., numerical targets like 3000ml water, boolean toggles like "Read 15 mins"), and inspect long-term trend lines.
- **Pain Points:** Most 75 Hard apps cannot be customized for non-standard challenges.

### Persona 3: The Open-Source Learner & Contributor ("Devon")
- **Profile:** Aspiring or junior software developer looking to understand real-world React, Tailwind CSS, charts, and mobile packaging workflows.
- **Needs:** Clean architecture, well-documented codebase, clear contributing guidelines, and intuitive component structure.

---

## 4. Feature Specifications (MVP vs. Planned Roadmap)

| Feature Area | MVP (Phase 1–6) | Post-MVP / Future (Phase 7+) | Status |
| :--- | :--- | :--- | :--- |
| **75 Hard Preset** | Complete 6-rule default checklist | Custom challenge presets (Soft, Medium, Custom) | Planned |
| **Daily Check-In** | One-tap checkboxes & progress increments | Quick note logs, photo attachments | Planned |
| **Streak Engine** | Current streak, best streak, day X/75 counter | Automatic failure/reset mode toggle | Planned |
| **Analytics** | Daily completion % line graph, summary stats | Weekly comparison bar charts, exportable PDF report | Planned |
| **History & Calendar** | Interactive calendar view with day status badges | Past day editing with audit history | Planned |
| **Data Storage** | `localStorage` persistence + JSON Export/Import | IndexedDB upgrade + Optional cloud sync | Planned |
| **Customization** | Add/edit habit names and targets | Reordering habits, custom colors/icons | Planned |
| **Platforms** | Responsive Web App (Desktop & Mobile) | Android APK (Capacitor) + PWA install | Planned |

---

## 5. Detailed Functional Requirements

### 5.1 Default 75 Hard Task Set
The default challenge contains 6 core daily tasks:
1. **Workout 1 (45 mins):** General exercise.
2. **Workout 2 (45 mins, Outdoor):** Dedicated outdoor workout regardless of weather.
3. **Drink 1 Gallon (3.8L) Water:** Trackable in increments (glasses, oz, or liters) or as a completed boolean.
4. **Follow a Diet:** Strict adherence to chosen nutritional plan (no cheat meals, zero alcohol).
5. **Read 10 Pages:** Non-fiction / self-development book (audiobooks not permitted by official rules).
6. **Take a Progress Photo:** Daily visual accountability.

### 5.2 Daily Completion & Progress Calculation
- **Daily Completion Rate:** Calculated as `(Completed Habits / Total Active Habits) * 100`.
- **Day Status:**
  - **Complete (100%):** All mandatory tasks completed.
  - **In Progress (1%–99%):** Some tasks completed.
  - **Incomplete (0%):** No tasks logged for the day.
- **Challenge Progress:** Displays `Day X of 75` and overall challenge completion percentage (`(Completed Days / 75) * 100`).
- **Streak Calculation:**
  - Current continuous days with 100% completion.
  - All-time highest streak achieved.

### 5.3 Analytics & Data Visualization
- **Line Graph:** Displays daily completion percentages across the active timeline using Recharts.
- **Summary Metrics Cards:**
  - Current Day (e.g., Day 14/75)
  - Current Streak (e.g., 14 Days)
  - Best Streak (e.g., 22 Days)
  - Overall Adherence Rate (e.g., 94%)

### 5.4 Calendar & History View
- A monthly calendar grid highlighting each day with a visual indicator (e.g., green for 100%, yellow for partial, red/empty for missed).
- Clicking any past date opens a read-only or editable log summary for that specific date.

### 5.5 Customization & Settings
- Ability to add new custom daily habits.
- Ability to toggle habits between required and optional.
- Ability to change challenge duration (e.g., 30, 60, 75, 100 days).
- Ability to reset challenge progress or start a new challenge cycle.

### 5.6 Data Backup & Portability
- **Export Data:** Generates a downloadable JSON file containing all challenge configurations, habit definitions, and daily history logs.
- **Import Data:** Restores all application state from an uploaded JSON backup file with validation.
- **Clear Data:** Safe option to wipe local application state with user confirmation.

---

## 6. Non-Goals (Out of Scope for Initial MVP)

To maintain focus and deliver a robust foundation, the following features are explicitly **out of scope** for the MVP:
- **Cloud Accounts & Authentication:** No user login, Google OAuth, or backend database servers in initial phases.
- **Social Feeds & Friend Activity:** No community feed, messaging, or public profiles.
- **Automated Food / Calorie Logging:** No integration with nutrition APIs (e.g., MyFitnessPal); diet tracking is a binary adherence check.
- **Paid Subscriptions / In-App Purchases:** The application will remain completely free and open-source.

---

## 7. User Flows

### Flow A: First-Time User Experience (Onboarding)
1. User visits the web app.
2. System initializes with the default 75 Hard challenge preset.
3. User lands directly on the **Today** dashboard showing Day 1 of 75 with all 6 habits uncompleted.
4. User can immediately start ticking habits or navigate to Settings to tweak the habit list.

### Flow B: Daily Habit Logging
1. User opens the application.
2. The current day's checklist is displayed with current completion ring.
3. User taps checkboxes as tasks are finished throughout the day.
4. Completion percentage and status indicators update instantly in real-time.
5. All updates are automatically serialized and saved to `localStorage`.

### Flow C: Reviewing Analytics & Calendar History
1. User navigates to the **Analytics** tab.
2. User inspects the line graph showing performance trends over the past weeks/months.
3. User navigates to the **Calendar** tab to view the 75-day grid.
4. User clicks on a past date to review which specific tasks were completed on that day.

### Flow D: Backing Up and Restoring Data
1. User opens **Settings**.
2. User clicks **Export Backup (.json)** — browser downloads the backup file.
3. On another device or browser, user navigates to **Settings** and clicks **Import Backup**.
4. System validates JSON schema, updates storage, and reloads state.

---

## 8. Definition of Done (DoD) for Releases

A feature or release phase is considered **Done** when:
1. **Implementation:** Code meets all functional requirements specified in the PRD and Architecture document.
2. **Testing:** Core business logic (streak math, completion %, date formatting, JSON serialization) is covered by unit tests.
3. **Responsiveness:** Verified without visual glitches or horizontal overflow on mobile (360px, 390px, 414px), tablet (768px), and desktop (1280px+).
4. **Code Quality:** Zero ESLint errors, zero TypeScript compilation errors, clean formatting via Prettier.
5. **Documentation:** Any changes to user workflows, storage schema, or component interfaces are documented in `docs/` and `README.md`.
6. **Public Workflow:** Changes merged into `main` via pull request with peer review and green CI checks.
