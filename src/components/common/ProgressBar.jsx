import React from 'react';

const ProgressBar = ({
  value = 0,
  max = 100,
  size = 'md',
  showLabel = true,
  label = '',
  sublabel = '',
  colorClass = 'from-indigo-600 to-indigo-500',
  className = '',
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100))) || 0;

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  return (
    <div className={`w-full ${className}`}>
      {(showLabel || label) && (
        <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
          <span className="flex items-center gap-1.5">
            {label && <span>{label}</span>}
            {sublabel && <span className="text-slate-400 font-normal">({sublabel})</span>}
          </span>
          <span className="text-indigo-600 font-bold">{percentage}%</span>
        </div>
      )}

      <div
        className={`w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60 shadow-inner`}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className={`rounded-full transition-all duration-500 ease-out bg-gradient-to-r ${colorClass} ${sizeClasses[size]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

