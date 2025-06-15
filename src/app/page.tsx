import { Button } from '@/shared/ui/@atoms';

export default function Home() {
  return (
    <div className="bg-background min-h-screen p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-text-primary text-4xl font-bold">
            Multi Wallet Dashboard
          </h1>
          <p className="text-text-secondary mt-2">
            새로운 색상 시스템으로 구축된 모던한 UI
          </p>
        </header>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Primary Card */}
          <div className="bg-card-bg border-card-border rounded-lg border p-6 shadow-sm">
            <h3 className="text-text-primary text-lg font-semibold">
              Primary Card
            </h3>
            <p className="text-text-secondary mt-2">기본 카드 스타일입니다.</p>
            <Button className="mt-4">Primary Button</Button>
          </div>

          {/* Secondary Card */}
          <div className="bg-surface border-border-secondary rounded-lg border p-6">
            <h3 className="text-text-primary text-lg font-semibold">
              Secondary Card
            </h3>
            <p className="text-text-tertiary mt-2">보조 카드 스타일입니다.</p>
            <Button
              variant="secondary"
              className="mt-4"
            >
              Secondary Button
            </Button>
          </div>

          {/* Status Cards */}
          <div className="space-y-4">
            <div className="bg-success-50 border-state-success/20 rounded-lg border p-4">
              <div className="flex items-center">
                <div className="bg-state-success h-2 w-2 rounded-full"></div>
                <span className="text-state-success ml-2 text-sm font-medium">
                  Success Status
                </span>
              </div>
            </div>

            <div className="bg-warning-50 border-state-warning/20 rounded-lg border p-4">
              <div className="flex items-center">
                <div className="bg-state-warning h-2 w-2 rounded-full"></div>
                <span className="text-state-warning ml-2 text-sm font-medium">
                  Warning Status
                </span>
              </div>
            </div>

            <div className="bg-error-50 border-state-error/20 rounded-lg border p-4">
              <div className="flex items-center">
                <div className="bg-state-error h-2 w-2 rounded-full"></div>
                <span className="text-state-error ml-2 text-sm font-medium">
                  Error Status
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Example */}
        <div className="bg-card-bg border-card-border rounded-lg border p-6">
          <h3 className="text-text-primary mb-4 text-lg font-semibold">
            Form Example
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-text-secondary mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-input-bg border-input-border text-input-text placeholder:text-input-placeholder focus:border-input-border-focus w-full rounded-md border px-3 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-text-secondary mb-1 block text-sm font-medium">
                Message
              </label>
              <textarea
                placeholder="메시지를 입력하세요..."
                rows={3}
                className="bg-input-bg border-input-border text-input-text placeholder:text-input-placeholder focus:border-input-border-focus w-full resize-none rounded-md border px-3 py-2 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="bg-surface-elevated border-border-primary rounded-lg border p-6">
          <h3 className="text-text-primary mb-4 text-lg font-semibold">
            Interactive Elements
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button>Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="success">Success Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
