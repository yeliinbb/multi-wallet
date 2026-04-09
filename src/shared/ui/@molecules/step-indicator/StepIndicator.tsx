interface StepIndicatorProps {
  currentStep: 1 | 2 | 3 | 4;
  totalSteps?: number;
}

export default function StepIndicator({
  currentStep,
  totalSteps = 4,
}: StepIndicatorProps) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full ${
            i < currentStep ? 'bg-gray-900' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
}
