'use client';

interface TabBarProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onTabChange(tab)}
          className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
            activeTab === tab
              ? 'border-b-2 border-gray-900 text-gray-900'
              : 'text-gray-400'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
