import { INITIAL_QUESTIONS } from './constants';

const STORAGE_KEY = 'interview_practice_tracker_questions_v1';

export const getStoredQuestions = () => {
  try {
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (!rawData) {
      // First time loading - initialize with default sample questions
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_QUESTIONS));
      return INITIAL_QUESTIONS;
    }
    const parsed = JSON.parse(rawData);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return INITIAL_QUESTIONS;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return INITIAL_QUESTIONS;
  }
};

export const saveStoredQuestions = (questions) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
};

export const clearStoredQuestions = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

export const resetStoredQuestionsToDefault = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_QUESTIONS));
    return INITIAL_QUESTIONS;
  } catch (error) {
    console.error('Error resetting localStorage:', error);
    return INITIAL_QUESTIONS;
  }
};

