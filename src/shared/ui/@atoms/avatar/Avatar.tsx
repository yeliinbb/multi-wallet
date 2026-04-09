'use client';

import { forwardRef } from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
  className?: string;
}

const sizeMap = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
} as const;

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt = '', size = 'md', fallback, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-200 ${sizeMap[size]} ${className}`}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-medium text-gray-500">
            {fallback || alt?.charAt(0)?.toUpperCase() || '?'}
          </span>
        )}
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';

export default Avatar;
