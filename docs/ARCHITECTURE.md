# System Architecture & Technical Design

## Project: 75 Hard Tracker
- **Document Version:** 1.0.0
- **Status:** Proposed / Planned
- **Target Platform:** Web (Desktop/Mobile) & Android APK

---

## 1. High-Level Architecture Overview

The **75 Hard Tracker** is engineered as a lightweight, offline-first, client-side Single Page Application (SPA). The design prioritizes zero-latency user interactions, total data privacy, and a seamless path to native Android distribution using Capacitor.

```
+-------------------------------------------------------------------------+
|                           PRESENTATION LAYER                            |
|  +-------------------------------------------------------------------+  |
|  |                 React Components & Views (Tailwind CSS)           |  |
|  |   - DashboardView (Today's Checklist & Day Progress)              |  |
|  |   - AnalyticsView (Recharts Trend Line & Summary Cards)           |  |
|  |   - CalendarView  (Interactive History Grid & Day Inspector)      |  |
|  |   - SettingsView  (Habits Editor, Custom Challenge, Data Backup)  |  |
|  +-------------------------------------------------------------------+  |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                          STATE & LOGIC LAYER                            |
|  +-------------------------------------------------------------------+  |
|  |                   Custom React Hooks & Contexts                   |  |
|  |   - useChallenge() (Active challenge, days counter, rules)        |  |
|  |   - useDailyLogs() (Checklist state, completion % calculation)    |  |
|  |   - useStreak()    (Current streak, longest streak, reset logic)  |  |
|  |   - useAnalytics() (Aggregated time-series data for Recharts)     |  |
|  +-------------------------------------------------------------------+  |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                          PERSISTENCE LAYER                              |
|  +-------------------------------------------------------------------+  |
|  |                     Storage Service Adapter                       |  |
|  |   - LocalStorage Driver (Initial MVP persistence)                 |  |
|  |   - JSON Export / Import Serializer & Schema Validator            |  |
|  |   - (Future: IndexedDB / SQLite / Cloud Sync Adapter)             |  |
|  +-------------------------------------------------------------------+  |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                       CROSS-PLATFORM RUNTIME                            |
|  +-----------------------------------+  +----------------------------+  |
|  |        Modern Web Browsers        |  |   Android via Capacitor    |  |
|  |  (Chrome, Firefox, Safari, Edge)  |  |  (Webview + Native Shell)  |  |
|  +-----------------------------------+  +----------------------------+  |
+-------------------------------------------------------------------------+
```

---

## 2. Technology Stack Selection & Rationale

| Technology | Role | Why Chosen |
| :--- | :--- | :--- |
| **React (v18+)** | UI Library | Component-based model allows building modular, reusable UI widgets (habit cards, progress rings, calendar cells). Declarative state synchronization ensures immediate visual updates upon checking off tasks. |
| **Vite** | Build Tool & Dev Server | Ultra-fast Hot Module Replacement (HMR), lightning-quick startup times, and optimized roll-up production bundling. Vastly superior developer experience compared to legacy Create React App. |
| **Tailwind CSS** | Styling System | Utility-first CSS provides a unified design token system, effortless responsive breakpoints (`sm:`, `md:`, `lg:`), cohesive dark/light theming, and zero runtime performance overhead. |
| **Recharts** | Data Visualization | Composable, declarative charting library built specifically on React and SVG. Lightweight, responsive, easy to style with Tailwind colors, and well-suited for time-series completion rate line graphs. |
| **localStorage (Initial)** | Data Persistence | Enables instantaneous, zero-configuration local persistence with zero network latency. Keeps 100% of user data on their device. Wrapped in an abstract storage adapter for future database extensions. |
| **Capacitor** | Native Android Packaging | Modern, lightweight alternative to Cordova developed by Ionic. Wraps the production web build inside an Android Studio native webview project, enabling distribution as an Android APK without rewriting frontend code. |
| **Lucide React** | Iconography | Clean, consistent, lightweight SVG icons for navigation, habit categories, and status indicators. |
| **Vitest & RTL** | Testing Framework | Blazing fast unit and component testing natively integrated with Vite configuration. |

---

## 3. Data Models & Schema Design (Planned)

The application models challenge configurations, individual habits, daily records, and user preferences using clean, serialized TypeScript interfaces.

### 3.1 Challenge Model
```typescript
export interface Challenge {
  id: string;                      // e.g., 'challenge-75-hard-default'
  name: string;                    // e.g., '75 Hard Challenge'
  description: string;             // Challenge summary / guidelines
  totalDays: number;               // Default: 75
  startDate: string;               // ISO Date string: 'YYYY-MM-DD'
  status: 'active' | 'completed' | 'failed' | 'paused';
  strictMode: boolean;             // If true, missed day triggers reset prompt
  habits: Habit[];                 // Active habits for this challenge
  createdAt: string;
  updatedAt: string;
}
```

### 3.2 Habit Model
```typescript
export interface Habit {
  id: string;                      // e.g., 'habit-workout-outdoor'
  title: string;                   // e.g., '45-Min Outdoor Workout'
  description?: string;            // e.g., 'Must be outdoors regardless of weather'
  category: 'fitness' | 'nutrition' | 'mindset' | 'hydration' | 'custom';
  type: 'boolean' | 'numeric';     // Checkbox vs. quantity (e.g., water volume)
  targetValue?: number;            // e.g., 3800 for 1 gallon (ml)
  unit?: string;                   // e.g., 'ml', 'pages', 'mins'
  isRequired: boolean;             // Required for 100% day completion
  order: number;                   // Display position
}
```

### 3.3 Daily Log Model
```typescript
export interface DailyLog {
  date: string;                    // ISO date key: 'YYYY-MM-DD'
  dayNumber: number;               // Day sequence within challenge (1 to totalDays)
  habitEntries: Record<string, HabitEntry>; // Keyed by habit.id
  notes?: string;                  // Optional journal or reflections
  isFullyCompleted: boolean;       // True if all required habits are satisfied
  completionPercentage: number;    // Calculated: (completed / total required) * 100
  updatedAt: string;
}

export interface HabitEntry {
  completed: boolean;
  value?: number;                  // Numeric progress if applicable
  completedAt?: string;            // ISO timestamp
}
```

### 3.4 User Settings & App State
```typescript
export interface UserSettings {
  theme: 'dark' | 'light' | 'system';
  reminderNotifications: boolean;
  waterUnit: 'gallon' | 'liters' | 'ounces';
  firstDayOfWeek: 0 | 1;           // 0: Sunday, 1: Monday
  backupVersion: number;
}
```

---

## 4. Planned Project Structure

```
Habit-Tracker/
├── .github/                      # GitHub Actions CI/CD workflows
│   └── workflows/
│       ├── test.yml              # Automated lint & unit testing
│       └── deploy.yml            # Automated web preview deployment
├── docs/                         # Project Documentation
│   ├── PRD.md                    # Product Requirements Document
│   ├── ARCHITECTURE.md           # High-Level Architecture & Stack (this file)
│   ├── DEVELOPMENT.md            # Git & Contribution Workflow Guide
│   └── ROADMAP.md                # Phased Implementation Milestones
├── public/                       # Static public assets (icons, favicon, manifest)
├── src/                          # Application Source Code
│   ├── assets/                   # Images, SVG illustrations
│   ├── components/               # Reusable UI Components
│   │   ├── common/               # Buttons, Cards, Modals, ProgressRings, Inputs
│   │   ├── layout/               # Header, NavigationBar, AppShell, Footer
│   │   ├── dashboard/            # HabitChecklist, HabitCard, DaySummaryBanner
│   │   ├── analytics/            # CompletionLineChart, StreakCard, StatsSummary
│   │   ├── calendar/             # CalendarGrid, DayCell, DayDetailModal
│   │   └── settings/             # HabitEditor, ChallengeForm, BackupManager
│   ├── context/                  # React Context Providers
│   │   ├── ChallengeContext.tsx   # Global challenge state & actions
│   │   └── ThemeContext.tsx       # Dark/light mode state
│   ├── hooks/                    # Custom React Hooks
│   │   ├── useChallenge.ts       # Access & mutate active challenge
│   │   ├── useDailyLogs.ts       # Retrieve, toggle, and log habit completions
│   │   ├── useStreak.ts          # Compute current/best streaks and continuity
│   │   └── useAnalytics.ts       # Format historical data for Recharts
│   ├── services/                 # Business Logic & Infrastructure
│   │   ├── storage/              # LocalStorage adapter & serialization
│   │   │   ├── storageAdapter.ts # Interface definition
│   │   │   └── localStorage.ts   # LocalStorage implementation
│   │   ├── calculations/         # Math utilities (streaks, percentages, dates)
│   │   └── presets/              # Default 75 Hard template definitions
│   ├── types/                    # TypeScript interfaces and type definitions
│   │   └── index.ts              # Challenge, Habit, DailyLog, Settings types
│   ├── utils/                    # Helper functions (date formatting, classnames)
│   │   ├── dateUtils.ts          # Date manipulation and formatting
│   │   └── formatters.ts         # Numbers and percentage formatting
│   ├── App.tsx                   # Main application root & view router
│   ├── index.css                 # Global CSS & Tailwind directives
│   └── main.tsx                  # Application entry point
├── android/                      # Native Android project generated by Capacitor
├── capacitor.config.ts           # Capacitor configuration file
├── index.html                    # HTML shell
├── package.json                  # Dependencies and build scripts
├── postcss.config.js             # PostCSS configuration for Tailwind
├── tailwind.config.js            # Tailwind theme tokens and dark mode config
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite build configuration
```

---

## 5. Persistence Strategy & Data Flow

### 5.1 Storage Adapter Pattern
To prevent tight coupling between the UI components and browser `localStorage`, all storage operations are routed through a generic `StorageService` interface.

```typescript
export interface StorageService {
  getChallenge(): Challenge | null;
  saveChallenge(challenge: Challenge): void;
  getDailyLogs(): Record<string, DailyLog>;
  saveDailyLog(log: DailyLog): void;
  getSettings(): UserSettings;
  saveSettings(settings: UserSettings): void;
  exportBackup(): string;          // Returns serialized JSON string
  importBackup(jsonString: string): boolean;
  clearAll(): void;
}
```

**Benefits of this abstraction:**
1. Allows seamless migration to IndexedDB or SQLite in later phases without altering React component code.
2. Simplifies automated testing by allowing mock storage drivers in unit tests.
3. Centralizes data validation, error handling (e.g., storage quota exceeded), and schema version migrations.

### 5.2 Unidirectional State Flow
1. **User Action:** User clicks a checkbox on a habit card.
2. **Hook Mutation:** `useDailyLogs` calls `toggleHabit(date, habitId)`.
3. **State Update:** React state updates immutably, triggering immediate re-render of completion percentages and progress rings.
4. **Storage Persistence:** Storage service asynchronously commits the updated payload to `localStorage`.
5. **Derived Metrics:** `useStreak` and `useAnalytics` automatically recompute derived metrics from the updated logs.

---

## 6. Native Android Packaging with Capacitor

Capacitor bridges the web application with native Android capabilities:
1. **Build Process:** Vite compiles the React app into static assets in `/dist`.
2. **Capacitor Sync:** `npx cap copy` copies the `/dist` bundle into the native Android platform directory (`/android`).
3. **Webview Execution:** The native Android wrapper launches a high-performance Chrome Webview rendering the application locally.
4. **Native Plugins (Future):**
   - `@capacitor/local-notifications` for daily habit reminders.
   - `@capacitor/camera` or filesystem access for optional progress photo storage.
   - `@capacitor/status-bar` for matching the native Android status bar with the app theme.

---

## 7. Performance, Security & Accessibility Considerations

### 7.1 Performance
- **Zero Heavy Dependencies:** Avoid monolithic UI component libraries; rely on lightweight Tailwind classes.
- **Code Splitting:** Lazy-load Analytics and Settings views using `React.lazy()` to keep the initial load bundle tiny (< 100KB gzipped).
- **Chart Optimization:** Recharts line graphs render only loaded date windows rather than thousands of unneeded data points.

### 7.2 Security & Privacy
- **Local-Only by Default:** No user data leaves the client device.
- **Input Sanitization:** Habit names and notes are sanitized to prevent XSS.
- **Safe JSON Imports:** Backup restoration parses JSON safely and validates schema properties before applying state.

### 7.3 Accessibility (a11y)
- Semantic HTML (`<main>`, `<header>`, `<nav>`, `<button>`, `<fieldset>`).
- Full keyboard navigation support (Tab, Space to toggle habit checkboxes).
- ARIA live regions for announcing completion percentage updates to screen readers.
- High-contrast color ratios compliant with WCAG 2.1 AA in both light and dark themes.
