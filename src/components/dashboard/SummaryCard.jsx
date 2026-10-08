import React from 'react';

const SummaryCard = ({
  title,
  value,
  subtext,
  icon: Icon,
  badgeText,
  badgeVariant = 'neutral',
  colorScheme = 'indigo', // 'indigo' | 'emerald' | 'teal' | 'amber' | 'purple'
}) => {
  const colorMap = {
    indigo: {
      bgIcon: 'bg-indigo-50 text-indigo-600',
      borderHover: 'hover:border-indigo-300',
      glow: 'group-hover:ring-indigo-100',
    },
    emerald: {
      bgIcon: 'bg-emerald-50 text-emerald-600',
      borderHover: 'hover:border-emerald-300',
      glow: 'group-hover:ring-emerald-100',
    },
    teal: {
      bgIcon: 'bg-teal-50 text-teal-600',
      borderHover: 'hover:border-teal-300',
      glow: 'group-hover:ring-teal-100',
    },
    amber: {
      bgIcon: 'bg-amber-50 text-amber-600',
      borderHover: 'hover:border-amber-300',
      glow: 'group-hover:ring-amber-100',
    },
    purple: {
      bgIcon: 'bg-purple-50 text-purple-600',
      borderHover: 'hover:border-purple-300',
      glow: 'group-hover:ring-purple-100',
    },
  };

  const badgeColors = {
    success: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    warning: 'bg-amber-100 text-amber-800 border-amber-200',
    info: 'bg-sky-100 text-sky-800 border-sky-200',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
  };

  const scheme = colorMap[colorScheme] || colorMap.indigo;

  return (
    <div
      className={`group relative bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 ${scheme.borderHover}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0 pr-3">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider truncate mb-1">
            {title}
          </p>
          <div className="flex items-baseline gap-2">
            <span
              className={`${
                typeof value === 'string' && value.length > 5
                  ? 'text-lg sm:text-xl'
                  : 'text-2xl sm:text-3xl'
              } font-extrabold text-slate-900 tracking-tight`}
            >
              {value}
            </span>
            {badgeText && (
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-semibold border ${
                  badgeColors[badgeVariant] || badgeColors.neutral
                }`}
              >
                {badgeText}
              </span>
            )}
          </div>
          {subtext && (
            <p className="mt-1 text-xs text-slate-500 font-medium truncate">
              {subtext}
            </p>
          )}
        </div>

        {Icon && (
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${scheme.bgIcon}`}
          >
            <Icon className="w-6 h-6" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;
