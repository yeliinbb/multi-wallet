import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import unusedImports from 'eslint-plugin-unused-imports';
import promisePlugin from 'eslint-plugin-promise';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ─────────────────────────────────────────────────────────────────────────────
  // Next.js 권장 설정: Core Web Vitals + TypeScript 지원
  // ─────────────────────────────────────────────────────────────────────────────
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // ─────────────────────────────────────────────────────────────────────────────
  // 프로젝트 커스텀 룰: 공통 설정 및 간단한 추가 룰
  // ─────────────────────────────────────────────────────────────────────────────
  {
    /* 빌드 결과물 및 node_modules 폴더 제외 */
    ignores: ['dist', 'node_modules'],

    /* 적용 대상 파일 */
    files: ['**/*.{js,jsx,ts,tsx}'],

    /* 언어 옵션 설정: 파서와 전역 변수를 정의 */
    languageOptions: {
      /* 파서 옵션: 코드 파싱 방식을 지정 */
      parserOptions: {
        tsconfigRootDir: __dirname, // tsconfig 위치 지정 (TypeScript 프로젝트에서 필수) TypeScript ESLint 플러그인이 타입 정보를 읽어들이기 위해 필요
        ecmaVersion: 2020, // ECMAScript 문법 버전 설정
        sourceType: 'module', // 모듈 시스템을 'module'로 지정해 import/export 문법을 허용
        ecmaFeatures: { jsx: true }, // JSX 문법 사용을 활성화 (React 및 유사 라이브러리에서 필요)
        jsxPragma: null, // JSX 자동 변환 사용 명시 (React 17+)
        jsxPragmaFrag: null,
      },

      /* 전역 변수 설정: ESLint가 이 변수들을 미리 알고 무시하도록 하기 */
      globals: {
        ...globals.browser, // 브라우저 환경 전역 객체(window, document 등)를 허용
        ...globals.node, // Node.js 환경 전역 객체(process, Buffer 등)를 허용
        React: true, // React 17 이상에서 JSX 변환 시 React를 자동으로 import 하지 않도록 React 전역 변수를 미리 허용
        JSX: true, // 새로운 JSX transform 사용 시 필요한 JSX 전역 타입을 허용
      },
    },

    settings: {
      react: {
        version: 'detect',
        runtime: 'automatic',
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      'jsx-a11y': jsxA11y,
      'unused-imports': unusedImports,
      promise: promisePlugin,
      prettier: prettier,
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      /* Code Style & Formatting */
      'prettier/prettier': 'error',
      'prefer-const': 'warn', // 값이 재할당되지 않는 변수에 대해 "let" 대신 "const"를 사용하도록 경고
      'prefer-arrow-callback': 'off', // eslint-plugin-prettier와 충돌하는 ESLint core 규칙 비활성화

      /* React-specific Rules */
      'react/no-unknown-property': 'off', // DOM에 정의되지 않은 속성 사용 체크 비활성화
      'react/prop-types': 'off', // 정의한 props에 대한 prop-types 체크 비활성화
      'react-hooks/exhaustive-deps': 'warn', // React Hooks 의존성 배열 규칙 경고

      /* TypeScript Rules */
      '@typescript-eslint/no-explicit-any': 'off', // TypeScript에서 'any' 타입의 명시적 사용 허용
      '@typescript-eslint/no-var-requires': 'off', // require 사용 허용
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }], // 미사용 변수 경고: 단, 변수명이 _로 시작하는 경우는 무시

      /* Naming Convention Rules */
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        // 기존 함수, 타입 규칙은 유지
        { selector: 'function', format: ['camelCase', 'PascalCase'] },
        { selector: 'typeLike', format: ['PascalCase'] },
      ],

      /* Accessibility (jsx-a11y) */
      'jsx-a11y/anchor-is-valid': 'warn', // <a> 태그 유효성 검사
      'jsx-a11y/no-noninteractive-element-interactions': 'error', // 상호작용 없는 요소 사용 방지

      /* Unused Imports/Vars (unused-imports) */
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

      /* Promise Safety (promise) */
      'promise/always-return': 'error', // then/catch 체인에서 항상 반환
      'promise/no-return-wrap': 'warn', // Promise 내부 반환 래핑 방지

      /* Complexity Limits */
      complexity: ['warn', { max: 10 }], // 함수 복잡도 제한
      'max-depth': ['warn', 4], // 중첩 블록 깊이 제한

      /* Component Naming */
      'react/jsx-pascal-case': ['warn', { allowAllCaps: false, ignore: [] }],

      /* Environment-based console/debugger restrictions */
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
];

export default eslintConfig;
