import React from 'react';
import { QuestionProvider } from './context/QuestionContext';
import DashboardOverview from './components/dashboard/DashboardOverview';
import QuestionFilters from './components/questions/QuestionFilters';
import QuestionList from './components/questions/QuestionList';
import QuestionForm from './components/questions/QuestionForm';
import Button from './components/common/Button';
import { useQuestions } from './hooks/useQuestions';
import {
  PlusIcon,
  BookOpenIcon,
  ResetIcon,
} from './assets/icons';

const AppContent = () => {
  const { openAddModal, resetToDefaults } = useQuestions();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Navigation / Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex items-center justify-center shadow-md shadow-indigo-500/25">
                <BookOpenIcon className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  Interview Practice Tracker
                  <span className="hidden sm:inline-flex text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                    Prep Hub
                  </span>
                </h1>
                <p className="text-xs text-slate-500 hidden sm:block">
                  Weekly preparation tracker for DSA, Git, Technical & Machine Coding
                </p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={resetToDefaults}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition cursor-pointer border border-slate-200"
                title="Reset to default sample questions"
              >
                <ResetIcon className="w-4 h-4" />
                <span>Reset Sample Data</span>
              </button>

              <Button
                variant="primary"
                size="md"
                icon={PlusIcon}
                onClick={openAddModal}
                className="shadow-sm shadow-indigo-500/20"
              >
                Add Question
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Mobile Reset Action */}
        <div className="sm:hidden flex justify-end mb-4">
          <button
            type="button"
            onClick={resetToDefaults}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs"
          >
            <ResetIcon className="w-3.5 h-3.5" />
            <span>Reset Samples</span>
          </button>
        </div>

        {/* Dashboard Overview: 4 Metrics Cards + Overall Progress Bar */}
        <DashboardOverview />

        {/* Question Management Section */}
        <section aria-label="Question Management" className="mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Tracked Preparation Tasks
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Filter by category, difficulty, or update real-time progress status.
              </p>
            </div>
          </div>

          {/* Search Bar & Dropdown Filters */}
          <QuestionFilters />

          {/* Question List / Empty State */}
          <QuestionList />
        </section>

        {/* Add / Edit Question Modal */}
        <QuestionForm />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:flex sm:items-center sm:justify-between text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-slate-700">Interview Practice Tracker</span>. Built for consistent preparation.
          </p>
          <p className="mt-2 sm:mt-0 flex items-center justify-center gap-1 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            Auto-persisted to LocalStorage
          </p>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <QuestionProvider>
      <AppContent />
    </QuestionProvider>
  );
};

export default App;