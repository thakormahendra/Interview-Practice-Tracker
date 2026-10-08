import React from 'react';

const Input = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  error = '',
  required = false,
  icon: Icon = null,
  className = '',
  helpText = '',
  ...rest
}) => {
  const inputId = id || name;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-semibold text-slate-700 mb-1.5">
          {label}
          {required && <span className="text-rose-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative rounded-lg shadow-xs">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`block w-full rounded-lg text-slate-800 placeholder-slate-400 text-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 bg-white ${
            Icon ? 'pl-10 pr-3.5 py-2.5' : 'px-3.5 py-2.5'
          } ${
            error
              ? 'border border-rose-300 focus:border-rose-500 focus:ring-rose-200'
              : 'border border-slate-300 focus:border-indigo-500 focus:ring-indigo-100'
          }`}
          {...rest}
        />
      </div>
      {error && <p className="mt-1 text-xs text-rose-600 font-medium">{error}</p>}
      {!error && helpText && <p className="mt-1 text-xs text-slate-500">{helpText}</p>}
    </div>
  );
};

export default Input;

