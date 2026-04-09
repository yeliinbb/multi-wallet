'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface SpendingDonutChartProps {
  data: { label: string; amount: number; color: string }[];
  year: number;
}

export default function SpendingDonutChart({
  data,
  year,
}: SpendingDonutChartProps) {
  const chartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        data: data.map((d) => d.amount),
        backgroundColor: data.map((d) => d.color),
        borderWidth: 0,
        cutout: '65%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="relative mx-auto w-56">
      <Doughnut
        data={chartData}
        options={options}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-semibold text-gray-700">{year}</span>
      </div>
    </div>
  );
}
