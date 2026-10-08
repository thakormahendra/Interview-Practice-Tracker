import React, { useState } from 'react';
import Badge from '../common/Badge';
import { STATUS_OPTIONS, STATUSES } from '../../utils/constants';
import {
  TrashIcon,
  EditIcon,
} from '../../assets/icons';

const QuestionCard = ({
  question,
  onUpdateStatus,
  onEdit,
  onDelete,
}) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const formattedDate = question.createdAt
    ? new Date(question.createdAt).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
      })
    : '';

  const isCompleted = question.status === STATUSES.COMPLETED;

  return (
    <div
      className={`group bg-white rounded-2xl p-5 border transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between ${
        isCompleted
          ? 'border-emerald-200/80 bg-linear-to-b from-white to-emerald-50/20'
          : 'border-slate-200/80 hover:border-slate-300'
      }`}
    >
      <div>
        {/* Badges Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge type="category" value={question.category} size="sm" />
            <Badge type="difficulty" value={question.difficulty} size="sm" />
          </div>

          <Badge type="status" value={question.status} size="sm" />
        </div>

        {/* Title */}
        <h4
          className={`text-base font-semibold leading-snug tracking-tight mb-2 ${
            isCompleted ? 'text-slate-700 line-through decoration-slate-300' : 'text-slate-900'
          }`}
        >
          {question.title}
        </h4>

        {/* Optional Notes */}
        {question.notes && (
          <p className="text-xs text-slate-500 line-clamp-2 mb-3 bg-slate-50/80 p-2.5 rounded-lg border border-slate-100">
            {question.notes}
          </p>
        )}
      </div>

      {/* Card Footer: Status Update & Action Buttons */}
      <div className="pt-3 mt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
        {/* Status Dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor={`status-${question.id}`} className="text-xs font-semibold text-slate-500">
            Status:
          </label>
          <select
            id={`status-${question.id}`}
            value={question.status}
            onChange={(e) => onUpdateStatus(question.id, e.target.value)}
            className="text-xs font-semibold bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg py-1 px-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer transition"
          >
            {STATUS_OPTIONS.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        {/* Actions: Edit & Delete */}
        <div className="flex items-center gap-1">
          {formattedDate && (
            <span className="text-[11px] text-slate-400 mr-2 hidden sm:inline">
              {formattedDate}
            </span>
          )}

          <button
            type="button"
            onClick={() => onEdit(question)}
            className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
            title="Edit question"
            aria-label="Edit question"
          >
            <EditIcon className="w-4 h-4" />
          </button>

          {showConfirmDelete ? (
            <div className="flex items-center gap-1 animate-in fade-in">
              <button
                type="button"
                onClick={() => onDelete(question.id)}
                className="px-2 py-1 text-xs font-semibold bg-rose-600 text-white rounded-md hover:bg-rose-700 transition cursor-pointer"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => setShowConfirmDelete(false)}
                className="px-2 py-1 text-xs text-slate-600 hover:bg-slate-100 rounded-md transition cursor-pointer"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowConfirmDelete(true)}
              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
              title="Delete question"
              aria-label="Delete question"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
