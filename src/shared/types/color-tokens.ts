/**
 * 색상 토큰 타입 정의
 * Tailwind CSS 4.0의 @theme 블록에서 정의된 색상들을 타입으로 관리
 */

// Base Colors
export type GrayScale =
  | 'gray-0'
  | 'gray-50'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'gray-1000';

export type PrimaryColors =
  | 'primary-50'
  | 'primary-100'
  | 'primary-200'
  | 'primary-300'
  | 'primary-400'
  | 'primary-500'
  | 'primary-600'
  | 'primary-700'
  | 'primary-800'
  | 'primary-900';

export type SecondaryColors =
  | 'secondary-50'
  | 'secondary-100'
  | 'secondary-200'
  | 'secondary-300'
  | 'secondary-400'
  | 'secondary-500'
  | 'secondary-600'
  | 'secondary-700'
  | 'secondary-800'
  | 'secondary-900';

export type StatusColors =
  | 'success-50'
  | 'success-500'
  | 'success-600'
  | 'warning-50'
  | 'warning-500'
  | 'warning-600'
  | 'error-50'
  | 'error-500'
  | 'error-600'
  | 'info-50'
  | 'info-500'
  | 'info-600';

// Semantic Colors
export type SemanticColors =
  | 'background'
  | 'surface'
  | 'surface-elevated'
  | 'text-primary'
  | 'text-secondary'
  | 'text-tertiary'
  | 'text-disabled'
  | 'text-inverse'
  | 'interactive-primary'
  | 'interactive-primary-hover'
  | 'interactive-secondary'
  | 'interactive-secondary-hover'
  | 'border-primary'
  | 'border-secondary'
  | 'border-focus'
  | 'state-success'
  | 'state-warning'
  | 'state-error'
  | 'state-info';

// All Color Types
export type ColorToken =
  | GrayScale
  | PrimaryColors
  | SecondaryColors
  | StatusColors
  | SemanticColors;
