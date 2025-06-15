import { COLOR_PALETTE } from '@/shared/constants/theme/color-palette';
import { colorUtils } from '@/shared/utils/color-utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'outline'
    | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      className = '',
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    // 사이즈별 스타일
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    // 변형별 스타일 - 유틸리티 함수 사용
    const getVariantClasses = () => {
      switch (variant) {
        case 'primary': {
          const { bg, text, bgHover } = COLOR_PALETTE.BUTTON.PRIMARY;
          return `${colorUtils.getBgClass(bg)} ${colorUtils.getTextClass(text)} hover:${colorUtils.getBgClass(bgHover)}`;
        }
        case 'secondary': {
          const { bg, text, bgHover } = COLOR_PALETTE.BUTTON.SECONDARY;
          return `${colorUtils.getBgClass(bg)} ${colorUtils.getTextClass(text)} hover:${colorUtils.getBgClass(bgHover)}`;
        }
        case 'success': {
          const { bg, text, bgHover } = COLOR_PALETTE.BUTTON.SUCCESS;
          return `${colorUtils.getBgClass(bg)} ${colorUtils.getTextClass(text)} hover:${colorUtils.getBgClass(bgHover)}`;
        }
        case 'warning': {
          const { bg, text, bgHover } = COLOR_PALETTE.BUTTON.WARNING;
          return `${colorUtils.getBgClass(bg)} ${colorUtils.getTextClass(text)} hover:${colorUtils.getBgClass(bgHover)}`;
        }
        case 'error': {
          const { bg, text, bgHover } = COLOR_PALETTE.BUTTON.ERROR;
          return `${colorUtils.getBgClass(bg)} ${colorUtils.getTextClass(text)} hover:${colorUtils.getBgClass(bgHover)}`;
        }
        case 'outline': {
          return `bg-transparent ${colorUtils.getTextClass(COLOR_PALETTE.TEXT.primary)} border ${colorUtils.getBorderClass('gray-200')} hover:${colorUtils.getBgClass('gray-50')}`;
        }
        case 'ghost': {
          return `bg-transparent ${colorUtils.getTextClass(COLOR_PALETTE.TEXT.primary)} hover:${colorUtils.getBgClass('gray-50')}`;
        }
        default: {
          const { bg, text, bgHover } = COLOR_PALETTE.BUTTON.PRIMARY;
          return `${colorUtils.getBgClass(bg)} ${colorUtils.getTextClass(text)} hover:${colorUtils.getBgClass(bgHover)}`;
        }
      }
    };

    const baseClasses =
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const finalClassName = `
      ${baseClasses}
      ${sizeClasses[size]}
      ${getVariantClasses()}
      ${className}
    `
      .trim()
      .replace(/\s+/g, ' ');

    return (
      <button
        ref={ref}
        className={finalClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;

// 사용 예시:
/*
// 기본 사용
<Button>Primary Button</Button>

// 변형 사용
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="success">Success Button</Button>

// 로딩 상태
<Button isLoading>Loading...</Button>

// 사이즈 변경
<Button size="lg">Large Button</Button>
*/
