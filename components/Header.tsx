
import React from 'react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const ShoppingCartIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);


export const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="bg-brand-surface sticky top-0 z-20 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-wider text-white">
              DELI SUSHI & WINGS
            </span>
        </div>
        <button
          onClick={onCartClick}
          className="relative text-white p-2 rounded-full hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-surface focus:ring-white transition"
          aria-label="Open shopping cart"
        >
          <ShoppingCartIcon className="h-7 w-7" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
