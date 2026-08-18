# Development Workflow & Contributing Guide

## Project: 75 Hard Tracker
- **Document Version:** 1.0.0
- **Audience:** Core Maintainers & Open-Source Contributors

---

## 1. Overview & Philosophy

The **75 Hard Tracker** project is built as a transparent, open-source project hosted on GitHub. To maintain high code quality, predictability, and a welcoming environment for developers of all skill levels, we adhere to a structured, issue-driven development lifecycle.

### The Core Development Cycle
```
[ 1. GitHub Issue ]
        |
        v
[ 2. Feature Branch ]
        |
        v
[ 3. Implementation ]
        |
        v
[ 4. Local Testing & Linting ]
        |
        v
[ 5. Conventional Commit ]
        |
        v
[ 6. Push & Pull Request (PR) ]
        |
        v
[ 7. Review & CI Checks ]
        |
        v
[ 8. Merge into Main ]
        |
        v
[ 9. Automated Deployment ]
```

---

## 2. Step-by-Step Development Lifecycle

### Step 1: GitHub Issue First
Every code change must originate from or link to a GitHub Issue.
- **Why?** Issues document the "why" before the "how", prevent duplicate work, and provide a public forum to align on requirements.
- **Issue Types:**
  - `feat`: Proposed new feature or enhancement.
  - `fix`: Bug report with reproduction steps.
  - `docs`: Documentation addition or correction.
  - `refactor` / `chore`: Code restructuring or tooling update.
- Always check open issues before starting work to avoid overlapping efforts.

---

### Step 2: Create a Dedicated Feature Branch
Never commit directly to the `main` branch. Always branch from an up-to-date `main`.

#### Branch Naming Conventions:
| Prefix | Purpose | Example |
| :--- | :--- | :--- |
| `feature/` | New user-facing feature | `feature/42-streak-counter` |
| `fix/` | Bug fix or patch | `fix/55-date-timezone-offset` |
| `docs/` | Documentation improvements | `docs/architecture-diagram-update` |
| `refactor/`| Code refactoring without behavior change | `refactor/storage-service-adapter` |
| `test/` | Adding or updating tests | `test/habit-math-unit-tests` |

#### Git Commands:
```bash
# 1. Ensure you have the latest main branch
git checkout main
git pull origin main

# 2. Create and switch to your feature branch
git checkout -b feature/issue-number-short-description
```

---

### Step 3: Local Implementation & Best Practices

When building application components and logic:
1. **Follow the Architecture:** Reference [docs/ARCHITECTURE.md](file:///c:/Users/pawan/OneDrive/Desktop/Habit-Tracker/docs/ARCHITECTURE.md) to ensure components reside in their correct directories and follow data flow patterns.
2. **Keep Changes Focused:** A pull request should do one thing well. Avoid combining unrelated fixes into a single branch.
3. **Write Readable, Self-Documenting Code:** Use meaningful variable and function names. Add comments for non-obvious business calculations (e.g., timezone handling, streak continuity logic).
4. **Maintain Responsive UI:** When creating or modifying UI components, verify that they look great on both mobile (360px+) and desktop (1280px+) screens.

---

### Step 4: Local Testing, Linting & Formatting

Before committing changes, verify that the project compiles cleanly, all tests pass, and styling follows standards.

#### Verification Commands (Planned):
```bash
# Run unit & component tests
npm run test

# Run linter checks
npm run lint

# Format code with Prettier
npm run format

# Run TypeScript typecheck
npm run typecheck

# Verify production build output
npm run build
```

---

### Step 5: Meaningful Commits (Conventional Commits)

We follow the **Conventional Commits** specification. This enables automated changelog generation and makes the Git history easy to read and understand.

#### Commit Format:
```
<type>(<optional scope>): <short description in present tense>

[optional longer body explaining why and what changed]

[optional issue reference, e.g. Closes #42]
```

#### Allowed Types:
- `feat`: A new feature for the user.
- `fix`: A bug fix.
- `docs`: Documentation only changes.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting).
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `chore`: Changes to the build process, tooling, or package configurations.

#### Example Commit Messages:
```bash
git commit -m "feat(dashboard): add circular completion progress ring"
git commit -m "fix(streak): prevent streak reset when logging habits across midnight"
git commit -m "docs(readme): add local development setup instructions"
```

---

### Step 6: Push & Open a Pull Request (PR)

Push your branch to GitHub:
```bash
git push -u origin feature/your-branch-name
```

#### Creating the PR on GitHub:
1. Set the base branch to `main` and compare branch to your feature branch.
2. Use a clear title following Conventional Commits (e.g., `feat(analytics): add 75-day completion line graph`).
3. Fill out the PR description with:
   - **Summary:** What changes were made and why.
   - **Related Issue:** Link the issue using keywords like `Closes #12` or `Fixes #34`.
   - **Testing Done:** What manual or automated tests were executed.
   - **Screenshots / Recordings:** For any UI changes (both mobile and desktop views).

---

### Step 7: Code Review & Continuous Integration (CI)

1. Automated CI pipelines (GitHub Actions) run linter, typecheck, tests, and build checks automatically on every PR.
2. Maintainers or peers will review your code.
3. If changes are requested:
   - Make the edits locally on your feature branch.
   - Commit and push them. The PR will update automatically.

---

### Step 8: Merging into Main

- PRs must have passing CI checks and at least one approving review.
- We utilize **Squash and Merge** to keep the `main` branch commit history clean, linear, and readable.
- The feature branch is automatically deleted upon successful merge.

---

### Step 9: Automated Deployment

Merging a PR into `main` automatically triggers deployment pipelines:
- **Web App:** Automatically deployed to the public hosting environment (GitHub Pages or Vercel).
- **Documentation:** Live documentation site updates automatically.
- **Android APK (Release Phase):** Triggered on tagged release versions (`v*.*.*`) to compile and sign the release build.

---

## 3. Environment & Prerequisites (Planned)

When development begins, developers will require:
- **Node.js:** v18.x or v20.x (LTS recommended)
- **Package Manager:** npm (v9+)
- **Git:** v2.30+
- **Code Editor:** VS Code (recommended extensions: ESLint, Prettier, Tailwind CSS IntelliSense)
- **For Android Packaging (Phase 11):** Android Studio with Android SDK 33+ & JDK 17.

---

## 4. Git Troubleshooting & Best Practices

### Keeping your Feature Branch Up-to-Date with Main
If `main` has moved forward while you were working on your branch:
```bash
# Switch to main and pull latest commits
git checkout main
git pull origin main

# Switch back to your feature branch
git checkout feature/your-branch-name

# Rebase your branch onto main
git rebase main

# If conflicts occur, resolve them in your editor, then:
git add .
git rebase --continue
```

### Undoing an Accidental Staged Change
```bash
# Unstage a file without losing edits
git restore --staged <filename>

# Discard all unstaged local edits
git restore <filename>
```
