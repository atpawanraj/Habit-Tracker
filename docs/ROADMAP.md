# Project Roadmap & Implementation Plan

## Project: 75 Hard Tracker
- **Document Version:** 1.0.0
- **Status:** Active Roadmap
- **Strategy:** Phased, iterative development with continuous verification.

---

## Roadmap Overview

```
+-------------------------------------------------------------------------------+
| PHASE 1: Foundation & Tooling Setup                                           |
| -> Vite + React + TypeScript + Tailwind CSS + GitHub Actions CI               |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
| PHASE 2: Core Design System & App Shell                                       |
| -> Theme tokens, navigation, responsive layout, dark/light mode               |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
| PHASE 3: Habit Engine & State Management                                      |
| -> 75 Hard rules preset, daily checklist, completion %, streak logic          |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
| PHASE 4: Persistence & Data Export                                            |
| -> LocalStorage adapter, serialization, JSON export/import backup             |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
| PHASE 5: Analytics & Data Visualization                                       |
| -> Recharts line graph, completion rates, streak metrics, stats cards         |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
| PHASE 6: Calendar & History View                                              |
| -> 75-day grid, monthly calendar, past day inspection & detail modal          |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
| PHASE 7: Customization & Settings                                             |
| -> Custom habit creator/editor, challenge duration adjuster, reset controls   |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
| PHASE 8: Polish, Micro-Interactions & a11y                                    |
| -> Animations, sound/haptic cues, keyboard navigation, WCAG AA compliance    |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
| PHASE 9: Comprehensive Testing & QA                                           |
| -> Unit tests for streak/math, component tests, cross-browser verification    |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
| PHASE 10: Web Deployment & PWA Configuration                                  |
| -> GitHub Pages / Vercel deployment, web manifest, offline service worker     |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
| PHASE 11: Android Packaging via Capacitor                                     |
| -> Capacitor Android setup, native splash/icons, notifications, APK build     |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
| PHASE 12: Public v1.0.0 Release & Maintenance                                 |
| -> Release tagging, user feedback collection, v1.1 feature backlog            |
+-------------------------------------------------------------------------------+
```

---

## Detailed Milestone Breakdown

### Phase 1: Foundation & Tooling Setup
- [ ] Initialize project with Vite + React + TypeScript.
- [ ] Configure Tailwind CSS with customized color palette, typography, and dark mode support.
- [ ] Set up ESLint, Prettier, and TypeScript strict compiler options.
- [ ] Configure Lucide icons for lightweight iconography.
- [ ] Set up GitHub Actions CI workflow for automated linting and build validation.

### Phase 2: Core Design System & App Shell
- [ ] Implement global layout shell (`AppShell`) with responsive containers (mobile, tablet, desktop).
- [ ] Create header with active day indicator and quick streak preview.
- [ ] Implement modern navigation bar (bottom nav for mobile, sidebar/top nav for desktop).
- [ ] Implement theme switcher (Dark, Light, System) with persistent preference.
- [ ] Build reusable UI primitives: `Button`, `Card`, `Badge`, `Modal`, `ProgressRing`.

### Phase 3: Habit Engine & Daily State Management
- [ ] Define TypeScript schemas for `Challenge`, `Habit`, `DailyLog`, and `UserSettings`.
- [ ] Implement default **75 Hard Preset** containing the 6 standard rules:
  1. 45-min Workout 1
  2. 45-min Outdoor Workout 2
  3. 1 Gallon Water Intake
  4. Follow Diet (No Cheat Meals / Alcohol)
  5. Read 10 Pages (Non-Fiction)
  6. Progress Photo
- [ ] Implement `useDailyLogs` custom hook to manage daily check-ins.
- [ ] Implement real-time completion percentage calculation (`(completed / total) * 100`).
- [ ] Implement streak math engine (`useStreak`): current streak, longest streak, and day continuity.

### Phase 4: Persistence Layer & Data Export
- [ ] Build `StorageService` interface abstraction.
- [ ] Implement `LocalStorage` driver with auto-save on state mutation.
- [ ] Implement state hydration logic with fallback defaults on initial load.
- [ ] Build JSON Backup Export feature (downloads `.json` file).
- [ ] Build JSON Backup Import feature with schema validation.
- [ ] Add "Reset Data" option with two-step safety confirmation modal.

### Phase 5: Analytics & Data Visualization
- [ ] Install and integrate **Recharts** library.
- [ ] Build `CompletionLineChart` displaying daily completion percentage trends over time.
- [ ] Build summary metrics widgets:
  - Total Active Days
  - Current Streak vs. Best Streak
  - Overall Consistency Score (%)
  - Habit completion breakdown (which habits are most/least completed).
- [ ] Ensure chart responsiveness across various mobile and desktop viewports.

### Phase 6: Calendar & History View
- [ ] Build interactive 75-Day Challenge Grid view (visual matrix of all 75 days).
- [ ] Build standard Monthly Calendar View with color-coded day markers (Complete, Partial, Missed).
- [ ] Implement `DayDetailModal` allowing users to click past dates to inspect completed tasks.
- [ ] Implement safe past-day edit mode for backfilling missed logs with audit flags.

### Phase 7: Customization & Settings
- [ ] Build **Habit Editor** view:
  - Add custom habit (name, category, optional target value/unit).
  - Edit existing habits (title, description, required status).
  - Delete or disable individual habits.
- [ ] Build **Challenge Settings**:
  - Customize challenge length (e.g., 30, 60, 75, 100 days).
  - Configure start date.
  - Strict mode toggle (warn/prompt reset on missed day vs. flexible mode).

### Phase 8: Polish, Micro-Interactions & Accessibility
- [ ] Add smooth CSS transitions and micro-animations for checkbox toggles and progress rings.
- [ ] Implement subtle celebratory animation (e.g., confetti effect) when reaching 100% on a day.
- [ ] Add empty states, loading skeletons, and friendly tooltip explanations.
- [ ] Perform Accessibility (a11y) audit:
  - Keyboard navigation (Tab order, Spacebar toggle).
  - ARIA attributes and screen reader announcements for percentage changes.
  - Color contrast compliance (WCAG 2.1 AA).

### Phase 9: Comprehensive Testing & Quality Assurance
- [ ] Set up Vitest and React Testing Library.
- [ ] Write unit tests for business logic:
  - Streak calculation and continuity algorithms.
  - Daily completion percentage math.
  - Timezone and midnight rollover handling.
  - Storage adapter serialization & backup validation.
- [ ] Write component tests for `HabitCard`, `ProgressRing`, and `HabitChecklist`.
- [ ] Conduct cross-browser testing (Chrome, Safari, Firefox, Edge, Mobile Safari, Chrome Android).

### Phase 10: Web Deployment & PWA Configuration
- [ ] Configure automated web deployment on GitHub Pages / Vercel.
- [ ] Add Web App Manifest (`manifest.json`) and app icons for "Add to Home Screen" support.
- [ ] Configure basic Service Worker for offline static asset caching.
- [ ] Perform Lighthouse audit to ensure 90+ scores across Performance, Accessibility, and Best Practices.

### Phase 11: Android Packaging via Capacitor
- [ ] Initialize Capacitor in the repository (`@capacitor/core`, `@capacitor/cli`, `@capacitor/android`).
- [ ] Configure `capacitor.config.ts` (app ID, app name, web directory).
- [ ] Generate Android platform folder and configure AndroidManifest.
- [ ] Add Android adaptive app icons and native splash screen assets.
- [ ] Test local notifications integration for daily habit reminders.
- [ ] Compile and test debug APK on Android device / emulator.
- [ ] Document build and release steps for generating production unsigned/signed APK.

### Phase 12: Public v1.0.0 Release & Community Launch
- [ ] Finalize public `README.md` and user guide.
- [ ] Tag git release `v1.0.0` with release notes and downloadable Android APK artifact.
- [ ] Open GitHub Discussions and issue templates for community feature requests.
- [ ] Maintain backlog for future versions (e.g., optional cloud sync, multiple simultaneous challenges).
