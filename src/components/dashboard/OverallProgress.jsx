import React from 'react';
import ProgressBar from '../common/ProgressBar';
import { SparklesIcon } from '../../assets/icons';

const OverallProgress = ({ metrics }) => {
  const {
    totalQuestions,
    totalCompleted,
    overallPercentage,
    completedDSA,
    totalDSA,
    completedTechnical,
    totalTechnical,
    completedGit,
    totalGit,
    completedMachineCoding,
    totalMachineCoding,
  } = metrics;

  const getMotivationMessage = () => {
    if (totalQuestions === 0) return 'Add your first interview question to start tracking!';
    if (overallPercentage === 100) return '🎉 Outstanding! All interview tasks are completed!';
    if (overallPercentage >= 75) return '🔥 Almost interview-ready! Keep up the momentum!';
    if (overallPercentage >= 50) return '💪 Over halfway done! Great consistency!';
    if (overallPercentage >= 25) return '🚀 Solid progress! Steady preparation pays off.';
    return '🌱 Every solved question brings you closer to your dream offer!';
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
              <SparklesIcon className="w-5 h-5" />
            </span>
            <h3 className="text-base font-bold text-slate-800">Weekly Preparation Progress</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {getMotivationMessage()}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-2xl font-black text-slate-900 tracking-tight">
              {totalCompleted} <span className="text-sm font-normal text-slate-400">/ {totalQuestions}</span>
            </div>
            <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
              Tasks Completed
            </div>
          </div>
        </div>
      </div>

      {/* Visual Progress Bar */}
      <ProgressBar
        value={totalCompleted}
        max={Math.max(totalQuestions, 1)}
        size="lg"
        showLabel={false}
        colorClass={
          overallPercentage === 100
            ? 'from-emerald-600 to-teal-500'
            : overallPercentage >= 50
            ? 'from-indigo-600 to-blue-500'
            : 'from-indigo-500 to-sky-400'
        }
      />

      <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>Completion rate: <strong className="text-slate-800">{overallPercentage}%</strong></span>
        <span>
          Remaining: <strong className="text-slate-800">{Math.max(0, totalQuestions - totalCompleted)}</strong> questions
        </span>
      </div>

      {/* Category breakdown pills */}
      <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="bg-slate-50/80 rounded-xl px-3 py-2 text-xs border border-slate-100">
          <span className="text-slate-500 font-medium block">DSA</span>
          <span className="font-bold text-slate-800">
            {completedDSA} / {totalDSA} completed
          </span>
        </div>
        <div className="bg-slate-50/80 rounded-xl px-3 py-2 text-xs border border-slate-100">
          <span className="text-slate-500 font-medium block">Full-Stack Tech</span>
          <span className="font-bold text-slate-800">
            {completedTechnical} / {totalTechnical} completed
          </span>
        </div>
        <div className="bg-slate-50/80 rounded-xl px-3 py-2 text-xs border border-slate-100">
          <span className="text-slate-500 font-medium block">Git & GitHub</span>
          <span className="font-bold text-slate-800">
            {completedGit} / {totalGit} completed
          </span>
        </div>
        <div className="bg-slate-50/80 rounded-xl px-3 py-2 text-xs border border-slate-100">
          <span className="text-slate-500 font-medium block">Machine Coding</span>
          <span className="font-bold text-slate-800">
            {completedMachineCoding} / {totalMachineCoding} completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default OverallProgress;
