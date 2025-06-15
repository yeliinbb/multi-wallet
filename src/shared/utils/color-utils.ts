import type { ColorToken } from '@/shared/types';

/**
 * 색상 유틸리티 함수들
 */
export const colorUtils = {
  /**
   * CSS 변수 형태로 색상 반환
   */
  getCSSVar: (color: ColorToken): string => `var(--color-${color})`,

  /**
   * Tailwind 클래스명 생성
   */
  getBgClass: (color: ColorToken): string => `bg-${color}`,
  getTextClass: (color: ColorToken): string => `text-${color}`,
  getBorderClass: (color: ColorToken): string => `border-${color}`,

  /**
   * 투명도가 적용된 클래스명 생성
   */
  getBgClassWithOpacity: (color: ColorToken, opacity: number): string =>
    `bg-${color}/${opacity}`,
  getTextClassWithOpacity: (color: ColorToken, opacity: number): string =>
    `text-${color}/${opacity}`,
  getBorderClassWithOpacity: (color: ColorToken, opacity: number): string =>
    `border-${color}/${opacity}`,
};

/**
 * 사용 예시:
 *
 * import { colorUtils } from '@/shared/utils/color-utils';
 *
 * // 기본 색상 토큰 직접 사용
 * const bgClass = colorUtils.getBgClass('primary-500');
 * const textClass = colorUtils.getTextClass('gray-700');
 *
 * // CSS 변수로 사용
 * const cssVar = colorUtils.getCSSVar('primary-500');
 *
 * // 투명도 적용
 * const bgWithOpacity = colorUtils.getBgClassWithOpacity('primary-500', 50);
 */
