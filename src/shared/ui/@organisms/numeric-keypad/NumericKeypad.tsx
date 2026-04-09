'use client';

const KEYS = [
  { num: '1', sub: '' },
  { num: '2', sub: 'ABC' },
  { num: '3', sub: 'DEF' },
  { num: '4', sub: 'GHI' },
  { num: '5', sub: 'JKL' },
  { num: '6', sub: 'MNO' },
  { num: '7', sub: 'PQRS' },
  { num: '8', sub: 'TUV' },
  { num: '9', sub: 'WXYZ' },
  { num: '', sub: '' },
  { num: '0', sub: '' },
  { num: 'delete', sub: '' },
];

interface NumericKeypadProps {
  onKeyPress: (key: string) => void;
  onDelete: () => void;
}

export default function NumericKeypad({
  onKeyPress,
  onDelete,
}: NumericKeypadProps) {
  return (
    <div className="grid grid-cols-3 gap-1">
      {KEYS.map((key, i) => {
        if (key.num === '') {
          return <div key={i} />;
        }

        if (key.num === 'delete') {
          return (
            <button
              key="delete"
              type="button"
              onClick={onDelete}
              className="flex h-14 items-center justify-center rounded-lg text-gray-600 active:bg-gray-100"
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
                <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                <path d="M18 9l-6 6M12 9l6 6" />
              </svg>
            </button>
          );
        }

        return (
          <button
            key={key.num}
            type="button"
            onClick={() => onKeyPress(key.num)}
            className="flex h-14 flex-col items-center justify-center rounded-lg text-lg font-medium text-gray-900 active:bg-gray-100"
          >
            {key.num}
            {key.sub && (
              <span className="text-[10px] text-gray-400">{key.sub}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
