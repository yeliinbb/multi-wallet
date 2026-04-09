interface EmptyStateProps {
  message: string;
  submessage?: string;
}

export default function EmptyState({ message, submessage }: EmptyStateProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-20">
      <p className="text-sm text-gray-400">{message}</p>
      {submessage && <p className="mt-1 text-sm text-gray-400">{submessage}</p>}
    </div>
  );
}
