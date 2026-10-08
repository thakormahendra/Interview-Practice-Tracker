/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import {
  CATEGORIES,
  DIFFICULTIES,
  STATUSES,
  INITIAL_QUESTIONS,
} from '../utils/constants';
import {
  getStoredQuestions,
  saveStoredQuestions,
  resetStoredQuestionsToDefault,
} from '../utils/storage';

export const QuestionContext = createContext(null);

export const QuestionProvider = ({ children }) => {
  // Questions list with persistence
  const [questions, setQuestions] = useState(() => getStoredQuestions());

  // Filter & Search states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);

  // Sync state to LocalStorage
  useEffect(() => {
    saveStoredQuestions(questions);
  }, [questions]);

  // Actions
  const addQuestion = useCallback((newQuestionData) => {
    const newQuestion = {
      id: `q-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      ...newQuestionData,
    };
    setQuestions((prev) => [newQuestion, ...prev]);
  }, []);

  const updateQuestion = useCallback((id, updatedData) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, ...updatedData, updatedAt: new Date().toISOString() } : q))
    );
  }, []);

  const deleteQuestion = useCallback((id) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  }, []);

  const updateStatus = useCallback((id, newStatus) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, status: newStatus, updatedAt: new Date().toISOString() } : q))
    );
  }, []);

  const resetToDefaults = useCallback(() => {
    const defaults = resetStoredQuestionsToDefault();
    setQuestions(defaults);
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedDifficulty('All');
    setSelectedStatus('All');
  }, []);

  const clearAllQuestions = useCallback(() => {
    setQuestions([]);
  }, []);

  // Filter reset
  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedDifficulty('All');
    setSelectedStatus('All');
  }, []);

  const hasActiveFilters = Boolean(
    searchTerm.trim() !== '' ||
    selectedCategory !== 'All' ||
    selectedDifficulty !== 'All' ||
    selectedStatus !== 'All'
  );

  // Modal helpers
  const openAddModal = useCallback(() => {
    setEditingQuestion(null);
    setIsModalOpen(true);
  }, []);

  const openEditModal = useCallback((question) => {
    setEditingQuestion(question);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setEditingQuestion(null);
  }, []);

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return questions.filter((item) => {
      // Search matching title or notes
      const normalizedSearch = searchTerm.trim().toLowerCase();
      const matchesSearch =
        normalizedSearch === '' ||
        item.title.toLowerCase().includes(normalizedSearch) ||
        (item.notes && item.notes.toLowerCase().includes(normalizedSearch));

      // Category matching
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      // Difficulty matching
      const matchesDifficulty =
        selectedDifficulty === 'All' || item.difficulty === selectedDifficulty;

      // Status matching
      const matchesStatus =
        selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesDifficulty && matchesStatus;
    });
  }, [questions, searchTerm, selectedCategory, selectedDifficulty, selectedStatus]);

  // Dashboard Summary Metrics
  const metrics = useMemo(() => {
    const totalQuestions = questions.length;

    const completedDSA = questions.filter(
      (q) => q.category === CATEGORIES.DSA && q.status === STATUSES.COMPLETED
    ).length;

    const totalDSA = questions.filter((q) => q.category === CATEGORIES.DSA).length;

    const completedTechnical = questions.filter(
      (q) => q.category === CATEGORIES.TECHNICAL && q.status === STATUSES.COMPLETED
    ).length;

    const totalTechnical = questions.filter(
      (q) => q.category === CATEGORIES.TECHNICAL
    ).length;

    const completedGit = questions.filter(
      (q) => q.category === CATEGORIES.GIT_GITHUB && q.status === STATUSES.COMPLETED
    ).length;

    const totalGit = questions.filter(
      (q) => q.category === CATEGORIES.GIT_GITHUB
    ).length;

    // Machine Coding analysis
    const machineCodingQuestions = questions.filter(
      (q) => q.category === CATEGORIES.MACHINE_CODING
    );
    const totalMachineCoding = machineCodingQuestions.length;
    const completedMachineCoding = machineCodingQuestions.filter(
      (q) => q.status === STATUSES.COMPLETED
    ).length;
    const inProgressMachineCoding = machineCodingQuestions.filter(
      (q) => q.status === STATUSES.IN_PROGRESS
    ).length;

    let machineCodingStatus = 'Pending';
    if (totalMachineCoding > 0) {
      if (completedMachineCoding === totalMachineCoding) {
        machineCodingStatus = 'Completed';
      } else if (inProgressMachineCoding > 0 || completedMachineCoding > 0) {
        machineCodingStatus = 'In Progress';
      } else {
        machineCodingStatus = 'Pending';
      }
    } else {
      machineCodingStatus = 'No Tasks';
    }

    const totalCompleted = questions.filter(
      (q) => q.status === STATUSES.COMPLETED
    ).length;

    const overallPercentage =
      totalQuestions > 0 ? Math.round((totalCompleted / totalQuestions) * 100) : 0;

    return {
      totalQuestions,
      totalCompleted,
      completedDSA,
      totalDSA,
      completedTechnical,
      totalTechnical,
      completedGit,
      totalGit,
      totalMachineCoding,
      completedMachineCoding,
      machineCodingStatus,
      overallPercentage,
    };
  }, [questions]);

  const value = {
    questions,
    filteredQuestions,
    metrics,
    // Filters
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
    // Modals
    isModalOpen,
    editingQuestion,
    openAddModal,
    openEditModal,
    closeModal,
    // Operations
    addQuestion,
    updateQuestion,
    deleteQuestion,
    updateStatus,
    resetToDefaults,
    clearAllQuestions,
  };

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};
