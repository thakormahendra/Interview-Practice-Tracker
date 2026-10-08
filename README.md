# Interview Practice Tracker

A responsive single-page React web application designed for students to track and manage their weekly interview preparation tasks across **Data Structures & Algorithms (DSA)**, **Git & GitHub**, **Full-Stack Technical**, and **Machine Coding**.

Built using **React 19**, **Tailwind CSS v4**, and **Vite**.

---

## 🌟 Key Features

### 1. 📊 Dashboard Overview
- **Summary Metric Cards**:
  - **Total Questions Added**: Overall count of prep tasks and remaining balance.
  - **Completed DSA Problems**: Real-time count of solved algorithmic problems.
  - **Completed Technical Questions**: Track full-stack theory and architectural concepts.
  - **Machine Coding Status**: Dynamically computes status (`Pending` / `In Progress` / `Completed`) based on machine coding assignments.
- **Visual Progress Bar**: Displays overall completion percentage with smooth gradients and category breakdown.

### 2. 📝 Question Management
- **Add / Edit Question Modal**:
  - Fields: **Title**, **Category** (*DSA*, *Git & GitHub*, *Full-Stack Technical*, *Machine Coding*), **Difficulty** (*Easy*, *Medium*, *Hard*), **Status** (*Pending*, *In Progress*, *Completed*), and optional **Notes/Key Takeaways**.
  - **Form Validation**: Strict client-side validation ensuring title length and required options are filled before submitting.
- **Question Cards & List**:
  - Distinct colored badges for category, difficulty level, and status.
  - Quick status dropdown selector on each card for rapid status changes.
  - Edit and Delete options with confirmation protection.

### 3. 🔍 Search & Filtering
- **Real-Time Search Bar**: Instantly filter questions by title, keywords, or notes.
- **Multi-criteria Dropdowns**: Filter by Category, Difficulty level, and Status.
- **Clear Filters Button**: One-click reset when filters are active.

### 4. 🎨 UI States & Polish
- **Empty State**: Welcoming message when no questions are present, with a button to add questions or restore sample questions.
- **No Search Results State**: Clear feedback with a prompt to clear filters.
- **Modern, Accessible Design**: Built with clean typography, soft card shadows, smooth transitions, and intuitive responsive layout.

### 5. 💾 Data Persistence
- **LocalStorage Sync**: Saves state immediately so all questions, updates, and deletes persist across page refreshes.
- Prepopulated with curated interview questions on first launch.

### 6. 📱 Responsive Layout
- Fully optimized across mobile screens, tablets, laptops, and ultra-wide displays.

---

## 📁 Project Structure

```
interview-practice-tracker/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/                      # SVG icons and visual assets
│   │   └── icons.jsx
│   ├── components/
│   │   ├── common/                  # Generic, reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Select.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Badge.jsx
│   │   │   └── ProgressBar.jsx
│   │   ├── dashboard/               # Dashboard metrics & progress
│   │   │   ├── DashboardOverview.jsx
│   │   │   ├── SummaryCard.jsx
│   │   │   └── OverallProgress.jsx
│   │   └── questions/               # Question management components
│   │       ├── QuestionForm.jsx     # Add / Edit modal form with validation
│   │       ├── QuestionList.jsx     # Filtered list view
│   │       ├── QuestionCard.jsx     # Individual item card with quick status
│   │       ├── QuestionFilters.jsx  # Search bar & filter dropdowns
│   │       └── EmptyState.jsx       # Views for empty list & no results
│   ├── context/
│   │   └── QuestionContext.jsx      # Centralized React state management
│   ├── hooks/
│   │   ├── useLocalStorage.js       # LocalStorage synchronization hook
│   │   └── useQuestions.js          # Custom hook to consume QuestionContext
│   ├── utils/
│   │   ├── constants.js             # Categories, difficulties, statuses & seed data
│   │   └── storage.js               # LocalStorage read/write/reset utilities
│   ├── App.jsx                      # Main app shell & layout
│   ├── index.css                    # Tailwind CSS imports & global styles
│   └── main.jsx                     # Vite entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```
