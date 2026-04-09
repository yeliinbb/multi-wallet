import type { ReactNode } from 'react';

interface BadgeProps {
  variant?: 'default' | 'amount' | 'payment';
  children: ReactNode;
  className?: string;
}

const variantStyles = {
  default: 'bg-gray-100 text-gray-700 text-xs',
  amount: 'bg-white text-gray-900 text-sm font-semibold px-3',
  payment: 'bg-gray-900 text-white text-xs',
} as const;

export default function Badge({
  variant = 'default',
  children,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
