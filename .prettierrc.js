/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120, // 한 줄 최대 길이
  tabWidth: 2, // 들여쓰기 공백 수
  useTabs: false, // 탭 대신 스페이스 사용
  semi: true, // 세미콜론 붙이기
  singleQuote: true, // 작은 따옴표 사용
  quoteProps: 'consistent', // 객체 속성 따옴표 일관성 유지
  jsxSingleQuote: false, // JSX에서는 큰 따옴표 사용
  trailingComma: 'all', // 가능한 경우 항상 쉼표 사용
  bracketSpacing: true, // 객체 중괄호 내 공백 유지: { foo: bar }
  bracketSameLine: false, // JSX에서 닫는 괄호를 다음 줄로 내림
  arrowParens: 'always', // 화살표 함수 매개변수 괄호 항상 사용
  proseWrap: 'always', // Markdown 줄바꿈 자동 적용
  htmlWhitespaceSensitivity: 'css', // HTML 공백 민감도 설정
  endOfLine: 'lf', // 개행 문자 스타일: LF (유닉스/맥 기준)
  embeddedLanguageFormatting: 'auto', // 코드블럭 포맷팅 자동
  singleAttributePerLine: true, // JSX에서 속성 1개당 1줄
};
