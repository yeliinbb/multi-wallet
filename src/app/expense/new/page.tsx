'use client';

import { useExpenseFormStore } from '@/entities/store';
import { Header } from '@/shared/ui/@molecules';
import { StepIndicator } from '@/shared/ui/@molecules';
import StepAmount from '@/features/expense/ui/StepAmount';
import StepCategory from '@/features/expense/ui/StepCategory';
import StepMemo from '@/features/expense/ui/StepMemo';
import StepLocation from '@/features/expense/ui/StepLocation';

export default function NewExpensePage() {
  const { step, reset } = useExpenseFormStore();

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        variant="sub"
        title="New Expense"
        onBack={() => {
          reset();
          window.history.back();
        }}
      />

      <div className="px-5">
        <StepIndicator currentStep={step} />
      </div>

      <div className="flex flex-1 flex-col">
        {step === 1 && <StepAmount />}
        {step === 2 && <StepCategory />}
        {step === 3 && <StepMemo />}
        {step === 4 && <StepLocation />}
      </div>
    </div>
  );
}
