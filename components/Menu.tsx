
import React, { useState } from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem as MenuItemCard } from './MenuItem';
import type { MenuItem as MenuItemType, CartItem, CustomizationChoice } from '../types';

interface MenuProps {
  onAddToCart: (item: MenuItemType, options: CustomizationChoice[], quantity: number) => void;
}

export const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  return (
    <div>
      {MENU_DATA.map((category) => (
        <section key={category.name} id={category.name.toLowerCase().replace(/ /g, '-')} className="mb-12">
          <h2 className="text-3xl font-extrabold text-white border-b-4 border-brand-red pb-2 mb-6">
            {category.name}
          </h2>
          {category.description && <p className="text-lg text-gray-300 mb-6">{category.description}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item) => (
              <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
