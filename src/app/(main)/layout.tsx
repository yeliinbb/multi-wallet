import { BottomNavBar } from '@/shared/ui/@organisms';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col pb-24">
      {children}
      <BottomNavBar />
    </div>
  );
}
