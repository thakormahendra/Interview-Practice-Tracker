import React from 'react';
import { useQuestions } from '../../hooks/useQuestions';
import { CATEGORY_OPTIONS, DIFFICULTY_OPTIONS, STATUS_OPTIONS } from '../../utils/constants';
import { SearchIcon, XMarkIcon, FilterIcon } from '../../assets/icons';

const QuestionFilters = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedDifficulty,
    setSelectedDifficulty,
    selectedStatus,
    setSelectedStatus,
    clearFilters,
    hasActiveFilters,
    filteredQuestions,
    questions,
  } = useQuestions();

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs mb-6">
      <div className="flex flex-col gap-4">
        {/* Top Row: Search Input */}
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <SearchIcon className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions by title, keyword, or notes..."
            className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 focus:bg-white transition-all"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              aria-label="Clear search text"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Bottom Row: Filter Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 items-center">
          {/* Category Dropdown */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 py-2.5 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition cursor-pointer"
              aria-label="Filter by Category"
            >
              <option value="All">All Categories</option>
              {CATEGORY_OPTIONS.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Dropdown */}
          <div className="relative">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 py-2.5 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition cursor-pointer"
              aria-label="Filter by Difficulty"
            >
              <option value="All">All Difficulties</option>
              {DIFFICULTY_OPTIONS.map((diff) => (
                <option key={diff} value={diff}>
                  {diff}
                </option>
              ))}
            </select>
          </div>

          {/* Status Dropdown */}
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 py-2.5 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition cursor-pointer"
              aria-label="Filter by Status"
            >
              <option value="All">All Statuses</option>
              {STATUS_OPTIONS.map((stat) => (
                <option key={stat} value={stat}>
                  {stat}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100/80 rounded-xl transition cursor-pointer border border-rose-200"
            >
              <XMarkIcon className="w-4 h-4" />
              <span>Reset Filters</span>
            </button>
          ) : (
            <div className="hidden lg:flex items-center justify-end text-xs text-slate-400 font-medium px-2">
              <FilterIcon className="w-4 h-4 mr-1 text-slate-400" />
              <span>Filtering {filteredQuestions.length} of {questions.length}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionFilters;
