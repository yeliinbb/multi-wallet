'use client';

import { Avatar } from '@/shared/ui/@atoms';
import type { Group } from '@/entities/types';

interface OverviewCardProps {
  group: Group;
  onClick?: () => void;
}

export default function OverviewCard({ group, onClick }: OverviewCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-2xl p-5 text-left text-white"
      style={{ backgroundColor: group.color }}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="mb-3 flex -space-x-2">
            {group.members.slice(0, 4).map((member) => (
              <Avatar
                key={member.id}
                size="sm"
                alt={member.name}
                fallback={member.name.charAt(0)}
                className="border-2 border-white"
              />
            ))}
            {group.members.length > 4 && (
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-black/20 text-xs text-white">
                +{group.members.length - 4}
              </div>
            )}
          </div>
          <h3 className="text-lg font-semibold">{group.name}</h3>
        </div>
        <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">
          ₩ {group.totalAmount.toLocaleString()}
        </span>
      </div>

      <div className="mt-4 flex gap-2">
        {['+', '⊡', '□', '↗'].map((icon, i) => (
          <div
            key={i}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white"
          >
            {icon}
          </div>
        ))}
        <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 12L12 4M12 4H6M12 4v6" />
          </svg>
        </div>
      </div>
    </button>
  );
}
