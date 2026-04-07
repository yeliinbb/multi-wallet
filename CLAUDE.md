# CLAUDE.md - Multi Wallet Project

## Project Overview

Multi Wallet - 지출/월렛 관리 대시보드 애플리케이션

## Tech Stack

- **Framework:** Next.js 15.2.3 (App Router, TurboPack)
- **Language:** TypeScript 5 (strict mode)
- **UI:** React 19, Tailwind CSS 4.1
- **State/Data:** @tanstack/react-query 5
- **SVG:** @svgr/webpack (SVG -> React components)
- **Fonts:** Inter, Neue Haas Grotesk Display, Pretendard

## Commands

- `npm run dev` - 개발 서버 (TurboPack)
- `npm run build` - 프로덕션 빌드
- `npm run lint` - ESLint 실행
- `npm run lint-staged` - lint-staged 수동 실행

## Project Structure

```
src/
├── app/              # Next.js App Router 페이지
├── assets/icons/     # SVG 아이콘 (SVGR로 React 컴포넌트화)
├── entities/         # 도메인 엔티티 (hooks, store)
└── shared/
    ├── ui/@atoms/    # 원자 단위 컴포넌트 (Button, Icon)
    ├── constants/    # 테마 상수 (COLOR_PALETTE)
    ├── types/        # 컬러 토큰 타입 정의
    └── utils/        # 유틸리티 함수 (color-utils)
```

## Code Conventions

### Path Aliases
- `@/*` -> `./src/*`

### Naming
- **변수:** camelCase, UPPER_CASE, PascalCase 허용
- **함수:** camelCase, PascalCase
- **타입:** PascalCase
- **컴포넌트:** PascalCase (JSX)
- `_` prefix로 시작하는 미사용 변수 허용

### Formatting (Prettier)
- 80자 줄 길이, 2칸 들여쓰기
- 싱글 쿼트 (JS), 더블 쿼트 (JSX)
- 트레일링 콤마: all
- 세미콜론: 사용
- JSX 속성: 1줄에 1개

### Linting (ESLint)
- 미사용 import 자동 제거
- import 자동 정렬 (simple-import-sort)
- 함수 복잡도 max 10, 중첩 깊이 max 4
- `any` 타입 사용 허용 (`@typescript-eslint/no-explicit-any: off`)
- Promise always-return 필수

### Git Hooks (Husky + lint-staged)
- Pre-commit: `prettier --write` + `eslint --fix` (tsx, ts, jsx, js)

## Design Token System

- CSS 변수 기반 (`globals.css`의 `@theme` 블록)
- 색상: Gray(0-1000), Primary(50-900), Secondary(50-900), Status, Semantic
- 유틸 함수: `getBgClass()`, `getTextClass()`, `getBorderClass()`, `getCSSVar()`
- 컴포넌트 팔레트: `COLOR_PALETTE.BUTTON`, `.INPUT`, `.CARD`, `.TEXT` 등
