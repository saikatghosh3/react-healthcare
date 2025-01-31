import React from 'react';

interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <button
        onClick={() => onSelectCategory('')}
        className={`px-6 py-2 rounded-full transition-all duration-300 ${
          selectedCategory === ''
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        All Specialists
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};