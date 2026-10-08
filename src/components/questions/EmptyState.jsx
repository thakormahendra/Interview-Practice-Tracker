import React from 'react';
import Button from '../common/Button';
import { PlusIcon, SearchIcon, ResetIcon } from '../../assets/icons';

const EmptyState = ({
  type = 'empty', // 'empty' | 'no-results'
  onAction,
  onResetDefaults,
  searchTerm = '',
}) => {
  if (type === 'no-results') {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 text-center max-w-lg mx-auto shadow-xs my-6">
        <div className="w-14 h-14 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <SearchIcon className="w-7 h-7" />
        </div>
        <h4 className="text-lg font-bold text-slate-800 mb-1.5">No Matching Questions Found</h4>
        <p className="text-sm text-slate-500 mb-6">
          {searchTerm ? (
            <>We couldn&apos;t find any questions matching &ldquo;<span className="font-semibold text-slate-700">{searchTerm}</span>&rdquo;.</>
          ) : (
            'No questions match the current combination of category, difficulty, or status filters.'
          )}
        </p>
        <Button
          onClick={onAction}
          variant="secondary"
          size="md"
          icon={ResetIcon}
          className="mx-auto"
        >
          Clear All Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 sm:p-12 text-center max-w-lg mx-auto shadow-xs my-6">
      <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <PlusIcon className="w-8 h-8" />
      </div>
      <h4 className="text-lg font-bold text-slate-800 mb-2">No Questions Added Yet</h4>
      <p className="text-sm text-slate-500 mb-6 leading-relaxed">
        Start building your interview prep tracker by adding DSA problems, technical concepts, Git exercises, or machine coding tasks.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button
          onClick={onAction}
          variant="primary"
          size="md"
          icon={PlusIcon}
          className="w-full sm:w-auto shadow-sm"
        >
          Add Your First Question
        </Button>
        {onResetDefaults && (
          <Button
            onClick={onResetDefaults}
            variant="outline"
            size="md"
            icon={ResetIcon}
            className="w-full sm:w-auto"
          >
            Load Sample Questions
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;

