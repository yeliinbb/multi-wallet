/**
 * 색상 팔레트 상수 - 프라이머리 토큰 사용
 * 컴포넌트별로 미리 정의된 색상 조합
 */
export const COLOR_PALETTE = {
  // Button 색상 조합 - 프라이머리 토큰 사용
  BUTTON: {
    PRIMARY: {
      bg: 'primary-500' as const,
      bgHover: 'primary-600' as const,
      text: 'gray-0' as const,
    },
    SECONDARY: {
      bg: 'gray-100' as const,
      bgHover: 'gray-200' as const,
      text: 'gray-900' as const,
    },
    SUCCESS: {
      bg: 'success-500' as const,
      bgHover: 'success-600' as const,
      text: 'gray-0' as const,
    },
    WARNING: {
      bg: 'warning-500' as const,
      bgHover: 'warning-600' as const,
      text: 'gray-0' as const,
    },
    ERROR: {
      bg: 'error-500' as const,
      bgHover: 'error-600' as const,
      text: 'gray-0' as const,
    },
  },

  // Input 색상 조합 - 프라이머리 토큰 사용
  INPUT: {
    bg: 'gray-0' as const,
    border: 'gray-200' as const,
    borderFocus: 'primary-500' as const,
    text: 'gray-1000' as const,
    placeholder: 'gray-500' as const,
  },

  // Card 색상 조합 - 프라이머리 토큰 사용
  CARD: {
    bg: 'gray-0' as const,
    border: 'gray-100' as const,
    shadow: 'gray-900' as const,
  },

  // Text 색상 조합 - 프라이머리 토큰 사용
  TEXT: {
    primary: 'gray-1000' as const,
    secondary: 'gray-700' as const,
    tertiary: 'gray-500' as const,
    disabled: 'gray-400' as const,
    inverse: 'gray-0' as const,
  },

  // Surface 색상 조합 - 프라이머리 토큰 사용
  SURFACE: {
    background: 'gray-0' as const,
    surface: 'gray-50' as const,
    elevated: 'gray-0' as const,
  },

  // Status 색상 조합 - 프라이머리 토큰 사용
  STATUS: {
    success: 'success-500' as const,
    warning: 'warning-500' as const,
    error: 'error-500' as const,
    info: 'info-500' as const,
  },
} as const;

/**
 * 사용 예시:
 *
 * import { COLOR_PALETTE } from '@/shared/constants/color-palette';
 * import { colorUtils } from '@/shared/utils/color-utils';
 *
 * // 미리 정의된 조합 사용
 * const primaryButton = {
 *   bg: colorUtils.getBgClass(COLOR_PALETTE.BUTTON.PRIMARY.bg),
 *   text: colorUtils.getTextClass(COLOR_PALETTE.BUTTON.PRIMARY.text),
 *   hover: colorUtils.getBgClass(COLOR_PALETTE.BUTTON.PRIMARY.bgHover),
 * };
 *
 * // Input 스타일
 * const inputClasses = `
 *   ${colorUtils.getBgClass(COLOR_PALETTE.INPUT.bg)}
 *   ${colorUtils.getBorderClass(COLOR_PALETTE.INPUT.border)}
 *   ${colorUtils.getTextClass(COLOR_PALETTE.INPUT.text)}
 * `;
 */
