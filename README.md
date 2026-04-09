# Multi Wallet

> 공동 지출, 다중 통화, 자동 환율, AI 기반 정산까지 — 여행자의 모든 지갑을 하나로 통합한 지출 관리 앱

## 개요

Multi Wallet은 일상과 여행 모두에서 사용 가능한 그룹 지출 기록 앱입니다.  
외국인 친구들과의 공동 정산, 다중 통화 자동 환산, 소비 패턴 시각화를 목표로 합니다.

## 주요 기능 (MVP)

| 기능 | 설명 |
|------|------|
| 지출 기록 | 금액, 카테고리, 위치, 메모 단계별 입력 |
| 카테고리 분류 | 식비, 쇼핑, 교통, 문화 등 기본 카테고리 + 커스텀 |
| 달력 조회 | 일/주/월별 지출 조회 |
| 공동 가계부 | QR/URL 초대, 실시간 공동 작성, 자동 정산 |
| 다중 통화 | 실시간 환율 API 기반 자동 환산 |
| 데이터 시각화 | 카테고리별 도넛 차트, 지출 트렌드 |
| OCR 영수증 스캔 | 영수증 이미지에서 자동 정보 추출 |
| AI 에이전트 | 소비 패턴 분석 및 대화형 인사이트 제공 |

## 기술 스택

- **Framework:** Next.js 15 (App Router, TurboPack)
- **Language:** TypeScript 5 (strict mode)
- **UI:** React 19, Tailwind CSS 4
- **State:** Zustand + @tanstack/react-query 5
- **SVG:** @svgr/webpack
- **Fonts:** Inter, Neue Haas Grotesk Display, Pretendard

## 프로젝트 구조

```
src/
├── app/
│   ├── (main)/         # BottomNavBar가 있는 메인 레이아웃
│   │   ├── page.tsx    # 홈 (지출 목록)
│   │   ├── expense/    # 지출 목록
│   │   ├── overview/   # 오버뷰 & 그룹 상세
│   │   └── stats/      # 통계
│   ├── expense/new/    # 지출 등록 (단계별 입력)
│   └── profile/        # 프로필
├── features/           # 도메인별 기능 UI
│   ├── expense/        # 지출 등록 단계 컴포넌트
│   ├── overview/       # 오버뷰 카드, 탭바
│   └── stats/          # 소비 도넛 차트
├── entities/
│   ├── types/          # Expense, Group, User 타입
│   └── store/          # UI 상태, 지출 폼 상태 (Zustand)
└── shared/
    ├── ui/
    │   ├── @atoms/     # Button, Icon, Input, Chip, Badge, Avatar, Divider
    │   ├── @molecules/ # Header, CategoryCard, ExpenseListItem, DatePill 등
    │   └── @organisms/ # BottomNavBar, CalendarStrip, CalendarGrid, NumericKeypad
    ├── mocks/          # 개발용 목 데이터
    └── constants/      # 디자인 토큰 상수
```

## 시작하기

```bash
npm install
npm run dev
```

개발 서버: [http://localhost:3000](http://localhost:3000)

## 스크립트

```bash
npm run dev        # 개발 서버 (TurboPack)
npm run build      # 프로덕션 빌드
npm run lint       # ESLint 실행
```

## 로드맵

- **Phase 1 (현재):** 지출 기록, 카테고리, 달력 조회, 통계 UI
- **Phase 2:** 공동 가계부, 자동 정산, 다중 통화 + 환율 API
- **Phase 3:** OCR 영수증 스캔, AI 에이전트, 소셜 로그인
- **Phase 4:** 지도 연동, 3D 여행 동선 시각화, 유저 팔로우
