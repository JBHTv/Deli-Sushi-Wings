
import React, { useState, useMemo } from 'react';
import { Menu } from './components/Menu';
import { Header } from './components/Header';
import { Cart } from './components/Cart';
import type { CartItem, MenuItem as MenuItemType, CustomizationChoice } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: MenuItemType, options: CustomizationChoice[] = [], quantity: number = 1) => {
    setCartItems(prevItems => {
      const optionIdentifier = options.map(o => o.name).join(', ');
      const existingItemIndex = prevItems.findIndex(
        cartItem => cartItem.id === item.id && cartItem.options.map(o => o.name).join(', ') === optionIdentifier
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      } else {
        let price = item.price;
        // For items where option sets the price (like Poke Bowls)
        if (options.length > 0 && options[0].price) {
            price = options[0].price;
        }
        
        const newItem: CartItem = {
          ...item,
          price: price,
          quantity,
          options,
          cartItemId: `${item.id}-${optionIdentifier}-${Date.now()}`
        };
        return [...prevItems, newItem];
      }
    });
  };

  const updateCartItemQuantity = (cartItemId: string, newQuantity: number) => {
    setCartItems(prevItems => {
      if (newQuantity <= 0) {
        return prevItems.filter(item => item.cartItemId !== cartItemId);
      }
      return prevItems.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.cartItemId !== cartItemId));
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cartItems]);

  const cartItemCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      <Header cartItemCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />
      <main className="container mx-auto px-4 py-8">
        <Menu onAddToCart={addToCart} />
      </main>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        total={cartTotal}
        onUpdateQuantity={updateCartItemQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
};

export default App;
