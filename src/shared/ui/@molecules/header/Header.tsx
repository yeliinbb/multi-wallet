'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { Avatar } from '@/shared/ui/@atoms';

interface MainHeaderProps {
  variant: 'main';
  onMenuClick?: () => void;
}

interface SubHeaderProps {
  variant: 'sub';
  title: string;
  onBack?: () => void;
  rightAction?: ReactNode;
}

type HeaderProps = MainHeaderProps | SubHeaderProps;

export default function Header(props: HeaderProps) {
  const router = useRouter();

  if (props.variant === 'main') {
    return (
      <header className="flex items-center justify-between px-5 py-4">
        <button
          type="button"
          onClick={props.onMenuClick}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 5h14M3 10h14M3 15h14" />
          </svg>
        </button>
        <Link href="/profile">
          <Avatar size="lg" />
        </Link>
      </header>
    );
  }

  return (
    <header className="flex items-center justify-between px-5 py-4">
      <button
        type="button"
        onClick={props.onBack ?? (() => router.back())}
        className="flex h-10 w-10 items-center justify-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <h1 className="text-lg font-semibold">{props.title}</h1>
      <div className="flex h-10 w-10 items-center justify-center">
        {props.rightAction ?? null}
      </div>
    </header>
  );
}
