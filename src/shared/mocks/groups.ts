import type { Group } from '@/entities/types';

export const MOCK_GROUPS: Group[] = [
  {
    id: '1',
    name: 'Trip to Bali',
    members: [
      { id: 'u1', name: 'Liin', email: 'liin@example.com' },
      { id: 'u2', name: 'Kim', email: 'kim@example.com' },
      { id: 'u3', name: 'Park', email: 'park@example.com' },
      { id: 'u4', name: 'Lee', email: 'lee@example.com' },
    ],
    color: '#E85D3A',
    totalAmount: 40000000,
    currency: 'KRW',
  },
  {
    id: '2',
    name: 'Jeju Island',
    members: [
      { id: 'u1', name: 'Liin', email: 'liin@example.com' },
      { id: 'u5', name: 'Choi', email: 'choi@example.com' },
    ],
    color: '#4A90D9',
    totalAmount: 5000000,
    currency: 'KRW',
  },
  {
    id: '3',
    name: 'Tokyo',
    members: [
      { id: 'u1', name: 'Liin', email: 'liin@example.com' },
      { id: 'u6', name: 'Yoon', email: 'yoon@example.com' },
      { id: 'u7', name: 'Seo', email: 'seo@example.com' },
    ],
    color: '#F5C542',
    totalAmount: 8000000,
    currency: 'KRW',
  },
];
