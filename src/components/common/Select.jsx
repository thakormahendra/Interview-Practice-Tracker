import React from 'react';
import { ChevronDownIcon } from '../../assets/icons';

const Select = ({
  id,
  name,
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  error = '',
  required = false,
  className = '',
  helpText = '',
  ...rest
}) => {
  const selectId = id || name;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={selectId} className="block text-sm font-semibold text-slate-700 mb-1.5">
          {label}
          {required && <span className="text-rose-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative rounded-lg shadow-xs">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`block w-full appearance-none rounded-lg text-slate-800 text-sm transition duration-150 ease-in-out px-3.5 py-2.5 pr-10 bg-white focus:outline-none focus:ring-2 cursor-pointer ${
            error
              ? 'border border-rose-300 focus:border-rose-500 focus:ring-rose-200'
              : 'border border-slate-300 focus:border-indigo-500 focus:ring-indigo-100'
          }`}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled className="text-slate-400">
              {placeholder}
            </option>
          )}
          {options.map((opt) => {
            const isObject = typeof opt === 'object' && opt !== null;
            const optVal = isObject ? opt.value : opt;
            const optLabel = isObject ? opt.label : opt;

            return (
              <option key={optVal} value={optVal}>
                {optLabel}
              </option>
            );
          })}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
          <ChevronDownIcon className="w-4 h-4" />
        </div>
      </div>
      {error && <p className="mt-1 text-xs text-rose-600 font-medium">{error}</p>}
      {!error && helpText && <p className="mt-1 text-xs text-slate-500">{helpText}</p>}
    </div>
  );
};

export default Select;

