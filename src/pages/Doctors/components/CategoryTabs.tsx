import React from 'react';

interface CategoryTabsProps {
  categories: Array<{ name: string; count: number }>;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-2.5">
      {categories.map(({ name, count }) => {
        const isActive = selectedCategory === name;
        return (
          <button
            key={name || 'all'}
            onClick={() => onSelectCategory(name)}
            className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? 'bg-blue-600 text-white shadow-card'
                : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:bg-blue-50 hover:ring-blue-200'
            }`}
          >
            {name === '' ? 'All Specialists' : name}
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-bold transition-colors ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-700'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};