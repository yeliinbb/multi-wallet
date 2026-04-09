'use client';

import { useState } from 'react';
import { Icon } from '@/shared/ui/@atoms';
import { Header } from '@/shared/ui/@molecules';
import { CategoryCard } from '@/shared/ui/@molecules';
import { HOME_CATEGORIES } from '@/shared/mocks';
import type { IconName } from '@/shared/ui/@atoms/icon/Icon';

const ICON_MAP: Record<string, IconName> = {
  food: 'FoodIcon',
  shopping: 'ShoppingIcon',
  grocery: 'GroceryIcon',
  transportation: 'TransportationIcon',
  hobby: 'HobbyIcon',
  culture: 'CultureIcon',
  drinks: 'DrinksIcon',
  coffee: 'CoffeeIcon',
};

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>('food');

  return (
    <div className="flex flex-col">
      <Header variant="main" />

      <div className="px-5 pt-2">
        <h1 className="font-[family-name:var(--font-neue-haas-grotesk)] text-3xl font-bold tracking-tight">
          Track Your Pocket
        </h1>
      </div>

      {/* Category Section */}
      <section className="mt-6 px-5">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Category</h2>
        <div className="overflow-x-auto">
          <div className="grid auto-cols-[140px] grid-flow-col grid-rows-2 gap-3">
            {HOME_CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.id}
                label={cat.label}
                isActive={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                icon={
                  ICON_MAP[cat.icon] ? (
                    <Icon
                      name={ICON_MAP[cat.icon]}
                      width={24}
                      height={24}
                      fill="currentColor"
                    />
                  ) : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Second Category Section */}
      <section className="mt-8 px-5">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Category</h2>
      </section>
    </div>
  );
}
