'use client';

import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, iconPosition = 'right', className = '', ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {icon && iconPosition === 'left' && (
          <span className="absolute left-3 text-gray-400">{icon}</span>
        )}
        <input
          ref={ref}
          className={`w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none ${
            icon && iconPosition === 'left' ? 'pl-10' : ''
          } ${icon && iconPosition === 'right' ? 'pr-10' : ''} ${className}`}
          {...props}
        />
        {icon && iconPosition === 'right' && (
          <span className="absolute right-3 text-gray-400">{icon}</span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
