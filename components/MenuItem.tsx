import React, { useState } from 'react';
import type { MenuItem as MenuItemType, CustomizationChoice } from '../types';
import { CustomizationModal } from './CustomizationModal';

interface MenuItemProps {
  item: MenuItemType;
  onAddToCart: (item: MenuItemType, options: CustomizationChoice[], quantity: number) => void;
}

const PlusIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
);


export const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCartClick = () => {
    if (item.options && item.options.length > 0) {
      setIsModalOpen(true);
    } else {
      onAddToCart(item, [], 1);
    }
  };

  const handleCustomizationSubmit = (options: CustomizationChoice[]) => {
    onAddToCart(item, options, 1);
    setIsModalOpen(false);
  };

  const formatPrice = (price: number) => {
    if (price === 0 && item.options) return "Desde...";
    return `$${price.toFixed(2)}`;
  };
  
  return (
    <>
      <div className="bg-brand-surface rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-brand-yellow">{item.name}</h3>
            {item.description && <p className="text-gray-300 mt-2 text-sm">{item.description}</p>}
            {item.options?.map(opt => (
              <div key={opt.title} className="mt-3 text-sm">
                <p className="font-semibold text-gray-200">{opt.title}:</p>
                <ul className="list-disc list-inside pl-2 text-gray-400">
                  {opt.choices.map(choice => (
                    <li key={choice.name}>
                      {choice.name}
                      {choice.price !== undefined && ` - $${choice.price.toFixed(2)}`}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-2xl font-semibold text-white">{formatPrice(item.price)}</span>
            <button
              onClick={handleAddToCartClick}
              className="bg-brand-red text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors"
            >
              <PlusIcon className="h-5 w-5"/>
              <span>Agregar</span>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && item.options && (
        <CustomizationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={item}
          onSubmit={handleCustomizationSubmit}
        />
      )}
    </>
  );
};