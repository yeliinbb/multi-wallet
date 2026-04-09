'use client';

interface CategoryCardProps {
  icon?: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function CategoryCard({
  icon,
  label,
  isActive = false,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-w-[140px] flex-col justify-between rounded-2xl p-4 transition-colors ${
        isActive
          ? 'bg-gray-900 text-white'
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}
      style={{ aspectRatio: '1 / 0.85' }}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-8 w-8 items-center justify-center ${isActive ? 'text-white' : 'text-gray-700'}`}
        >
          {icon}
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12L12 4M12 4H6M12 4v6" />
        </svg>
      </div>
      <span className="mt-2 text-left text-sm font-medium">{label}</span>
    </button>
  );
}
