'use client';

interface ChipProps {
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Chip({
  selected = false,
  onClick,
  children,
  className = '',
}: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        selected
          ? 'border-gray-900 bg-gray-900 text-white'
          : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
      } ${className}`}
    >
      {children}
    </button>
  );
}
