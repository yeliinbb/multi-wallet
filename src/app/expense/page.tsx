import { Icon } from '@/shared/ui/@atoms/icon';

export default function ExpensePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Icon
        name="FoodIcon"
        fill="#FF5722"
        width={32}
        height={32}
      />
      <span className="text-2xl font-medium">New Expense</span>
    </div>
  );
}
