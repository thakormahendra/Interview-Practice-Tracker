import React from 'react';
import { CATEGORIES, DIFFICULTIES, STATUSES } from '../../utils/constants';

const Badge = ({
  type = 'custom', // 'category' | 'difficulty' | 'status' | 'custom'
  value,
  children,
  size = 'md',
  className = '',
}) => {
  const label = children || value;

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-1 font-semibold',
    lg: 'text-sm px-3 py-1 font-semibold',
  };

  const getStyleForType = () => {
    if (type === 'category') {
      switch (value) {
        case CATEGORIES.DSA:
          return 'bg-indigo-50 text-indigo-700 border border-indigo-200 ring-1 ring-indigo-500/10';
        case CATEGORIES.GIT_GITHUB:
          return 'bg-purple-50 text-purple-700 border border-purple-200 ring-1 ring-purple-500/10';
        case CATEGORIES.TECHNICAL:
          return 'bg-teal-50 text-teal-700 border border-teal-200 ring-1 ring-teal-500/10';
        case CATEGORIES.MACHINE_CODING:
          return 'bg-amber-50 text-amber-800 border border-amber-200 ring-1 ring-amber-500/10';
        default:
          return 'bg-slate-100 text-slate-700 border border-slate-200';
      }
    }

    if (type === 'difficulty') {
      switch (value) {
        case DIFFICULTIES.EASY:
          return 'bg-emerald-50 text-emerald-700 border border-emerald-200 ring-1 ring-emerald-500/10';
        case DIFFICULTIES.MEDIUM:
          return 'bg-amber-50 text-amber-700 border border-amber-200 ring-1 ring-amber-500/10';
        case DIFFICULTIES.HARD:
          return 'bg-rose-50 text-rose-700 border border-rose-200 ring-1 ring-rose-500/10';
        default:
          return 'bg-slate-100 text-slate-700 border border-slate-200';
      }
    }

    if (type === 'status') {
      switch (value) {
        case STATUSES.COMPLETED:
          return 'bg-emerald-50 text-emerald-800 border border-emerald-200 ring-1 ring-emerald-600/10';
        case STATUSES.IN_PROGRESS:
          return 'bg-sky-50 text-sky-700 border border-sky-200 ring-1 ring-sky-500/10';
        case STATUSES.PENDING:
          return 'bg-slate-100 text-slate-600 border border-slate-200 ring-1 ring-slate-400/10';
        default:
          return 'bg-slate-100 text-slate-700 border border-slate-200';
      }
    }

    return 'bg-slate-100 text-slate-700 border border-slate-200';
  };

  const renderIndicator = () => {
    if (type === 'status') {
      let dotColor = 'bg-slate-400';
      if (value === STATUSES.COMPLETED) dotColor = 'bg-emerald-500';
      if (value === STATUSES.IN_PROGRESS) dotColor = 'bg-sky-500 animate-pulse';

      return <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${dotColor}`} />;
    }

    if (type === 'difficulty') {
      let dotColor = 'bg-emerald-500';
      if (value === DIFFICULTIES.MEDIUM) dotColor = 'bg-amber-500';
      if (value === DIFFICULTIES.HARD) dotColor = 'bg-rose-500';

      return <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${dotColor}`} />;
    }

    return null;
  };

  return (
    <span
      className={`inline-flex items-center rounded-full tracking-wide transition-colors ${sizeClasses[size]} ${getStyleForType()} ${className}`}
    >
      {renderIndicator()}
      {label}
    </span>
  );
};

export default Badge;

