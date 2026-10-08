import React, { useState, useEffect } from 'react';
import Modal from '../common/Modal';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';
import { useQuestions } from '../../hooks/useQuestions';
import {
  CATEGORIES,
  CATEGORY_OPTIONS,
  DIFFICULTIES,
  DIFFICULTY_OPTIONS,
  STATUSES,
  STATUS_OPTIONS,
} from '../../utils/constants';

const defaultFormState = {
  title: '',
  category: CATEGORIES.DSA,
  difficulty: DIFFICULTIES.MEDIUM,
  status: STATUSES.PENDING,
  notes: '',
};

const QuestionForm = () => {
  const {
    isModalOpen,
    closeModal,
    editingQuestion,
    addQuestion,
    updateQuestion,
  } = useQuestions();

  const [formData, setFormData] = useState(defaultFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync form data when modal opens or editingQuestion changes
  useEffect(() => {
    if (editingQuestion) {
      setFormData({
        title: editingQuestion.title || '',
        category: editingQuestion.category || CATEGORIES.DSA,
        difficulty: editingQuestion.difficulty || DIFFICULTIES.MEDIUM,
        status: editingQuestion.status || STATUSES.PENDING,
        notes: editingQuestion.notes || '',
      });
    } else {
      setFormData(defaultFormState);
    }
    setErrors({});
  }, [editingQuestion, isModalOpen]);

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (!formData.difficulty) {
      newErrors.difficulty = 'Please select a difficulty level';
    }

    if (!formData.status) {
      newErrors.status = 'Please select a status';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const payload = {
      title: formData.title.trim(),
      category: formData.category,
      difficulty: formData.difficulty,
      status: formData.status,
      notes: formData.notes.trim(),
    };

    if (editingQuestion) {
      updateQuestion(editingQuestion.id, payload);
    } else {
      addQuestion(payload);
    }

    setIsSubmitting(false);
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      title={editingQuestion ? 'Edit Question' : 'Add New Interview Task'}
      subtitle={
        editingQuestion
          ? 'Update your problem details, difficulty, or progress status.'
          : 'Track a new DSA problem, technical concept, Git drill, or machine coding project.'
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <Input
          id="title"
          name="title"
          label="Question / Task Title"
          placeholder="e.g. Invert a Binary Tree or Implement Debounce"
          value={formData.title}
          onChange={handleChange}
          error={errors.title}
          required
        />

        {/* Category & Difficulty Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select
            id="category"
            name="category"
            label="Category"
            options={CATEGORY_OPTIONS}
            value={formData.category}
            onChange={handleChange}
            error={errors.category}
            required
          />

          <Select
            id="difficulty"
            name="difficulty"
            label="Difficulty"
            options={DIFFICULTY_OPTIONS}
            value={formData.difficulty}
            onChange={handleChange}
            error={errors.difficulty}
            required
          />
        </div>

        {/* Status */}
        <Select
          id="status"
          name="status"
          label="Status"
          options={STATUS_OPTIONS}
          value={formData.status}
          onChange={handleChange}
          error={errors.status}
          required
        />

        {/* Optional Notes / Solution Link */}
        <div>
          <label htmlFor="notes" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Notes / Learning Key Takeaways <span className="text-xs font-normal text-slate-400">(Optional)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Add relevant edge cases, time/space complexity, or solution insights..."
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
          <Button
            type="button"
            variant="ghost"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
          >
            {editingQuestion ? 'Save Changes' : 'Add Question'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default QuestionForm;

