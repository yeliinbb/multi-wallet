'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  {
    href: '/',
    label: 'Home',
    icon: (active: boolean) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={active ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  {
    href: '/expense',
    label: 'Calendar',
    icon: (active: boolean) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={active ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="18"
          rx="2"
        />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    href: '/expense/new',
    label: 'Add',
    isFab: true,
    icon: (_active: boolean) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
  },
  {
    href: '/overview',
    label: 'Overview',
    icon: (active: boolean) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={active ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
        />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    href: '/stats',
    label: 'Stats',
    icon: (active: boolean) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={active ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          x="3"
          y="12"
          width="4"
          height="9"
        />
        <rect
          x="10"
          y="6"
          width="4"
          height="15"
        />
        <rect
          x="17"
          y="3"
          width="4"
          height="18"
        />
      </svg>
    ),
  },
];

export default function BottomNavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 flex w-[calc(100%-40px)] max-w-[390px] -translate-x-1/2 items-center justify-around rounded-2xl bg-gray-800 px-4 py-3">
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.href === '/'
            ? pathname === '/'
            : pathname.startsWith(item.href) && !item.isFab;

        if (item.isFab) {
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 shadow-lg"
            >
              {item.icon(false)}
            </Link>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex h-10 w-10 items-center justify-center transition-colors ${
              isActive ? 'text-white' : 'text-gray-500'
            }`}
          >
            {item.icon(isActive)}
          </Link>
        );
      })}
    </nav>
  );
}
