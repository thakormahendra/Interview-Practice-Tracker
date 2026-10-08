import React from 'react';
import QuestionCard from './QuestionCard';
import EmptyState from './EmptyState';
import { useQuestions } from '../../hooks/useQuestions';

const QuestionList = () => {
  const {
    questions,
    filteredQuestions,
    searchTerm,
    clearFilters,
    openAddModal,
    openEditModal,
    deleteQuestion,
    updateStatus,
    resetToDefaults,
  } = useQuestions();

  // Case 1: Total questions is 0
  if (questions.length === 0) {
    return (
      <EmptyState
        type="empty"
        onAction={openAddModal}
        onResetDefaults={resetToDefaults}
      />
    );
  }

  // Case 2: Filtered questions is 0
  if (filteredQuestions.length === 0) {
    return (
      <EmptyState
        type="no-results"
        onAction={clearFilters}
        searchTerm={searchTerm}
      />
    );
  }

  return (
    <div>
      {/* Count header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-700">
          Showing <span className="font-bold text-slate-900">{filteredQuestions.length}</span>
          {filteredQuestions.length !== questions.length && (
            <span> of {questions.length}</span>
          )}{' '}
          {filteredQuestions.length === 1 ? 'question' : 'questions'}
        </h3>
      </div>

      {/* Grid of question cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredQuestions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q}
            onUpdateStatus={updateStatus}
            onEdit={openEditModal}
            onDelete={deleteQuestion}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;

