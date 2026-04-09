'use client';

interface CategoryIconProps {
  icon?: React.ReactNode;
  label: string;
  selected?: boolean;
  onSelect?: () => void;
}

export default function CategoryIcon({
  icon,
  label,
  selected = false,
  onSelect,
}: CategoryIconProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex flex-col items-center gap-1.5"
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${
          selected
            ? 'bg-gray-900 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {icon}
      </div>
      <span className="text-xs text-gray-600">{label}</span>
    </button>
  );
}
