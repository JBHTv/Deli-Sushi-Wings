
import React, { useState } from 'react';
import type { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  total: number;
  onUpdateQuantity: (cartItemId: string, newQuantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

const PlusIcon: React.FC<{className?: string}> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>;
const MinusIcon: React.FC<{className?: string}> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>;
const TrashIcon: React.FC<{className?: string}> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;
const CloseIcon: React.FC<{className?: string}> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;


export const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, total, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Efectivo');

  if (!isOpen) return null;

  const handleSendOrder = () => {
    if (!name || !address) {
      alert('Por favor, ingresa tu nombre y domicilio.');
      return;
    }
    
    let message = `¡Hola Deli Sushi & Wings! Quisiera hacer el siguiente pedido:\n\n`;
    cartItems.forEach(item => {
      const optionsText = item.options.length > 0 ? ` (${item.options.map(o => o.name).join(', ')})` : '';
      message += `${item.quantity}x ${item.name}${optionsText} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*Total: $${total.toFixed(2)}*\n\n`;
    message += `*A nombre de:* ${name}\n`;
    message += `*Domicilio:* ${address}\n`;
    message += `*Forma de pago:* ${paymentMethod}\n\n`;
    message += `¡Gracias!`;

    const phoneNumber = '5213271104293'; // Replace with the actual number, 521 is for Mexico mobile
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4">
      <div className="bg-brand-surface rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="p-4 border-b border-gray-600 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Tu Pedido</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white"><CloseIcon className="h-6 w-6" /></button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          {cartItems.length === 0 ? (
            <p className="text-gray-400 text-center py-8">Tu carrito está vacío.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.cartItemId} className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    {item.options.length > 0 && (
                      <p className="text-sm text-gray-300">{item.options.map(o => o.name).join(', ')}</p>
                    )}
                     <p className="text-brand-yellow font-bold">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-gray-500 rounded">
                      <button onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)} className="p-1 text-white hover:bg-gray-600"><MinusIcon className="h-4 w-4"/></button>
                      <span className="px-2 text-white">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)} className="p-1 text-white hover:bg-gray-600"><PlusIcon className="h-4 w-4"/></button>
                    </div>
                    <button onClick={() => onRemoveItem(item.cartItemId)} className="text-red-500 hover:text-red-400"><TrashIcon className="h-5 w-5"/></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-600 space-y-4">
              <div className="space-y-3">
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nombre</label>
                      <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-red focus:border-brand-red"/>
                  </div>
                   <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-300">Domicilio</label>
                      <input type="text" id="address" value={address} onChange={e => setAddress(e.target.value)} className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-red focus:border-brand-red"/>
                  </div>
                  <div>
                      <label htmlFor="payment" className="block text-sm font-medium text-gray-300">Forma de Pago</label>
                      <select id="payment" value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)} className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-red focus:border-brand-red">
                          <option>Efectivo</option>
                          <option>Transferencia</option>
                          <option>Tarjeta (Terminal)</option>
                      </select>
                  </div>
              </div>

            <div className="flex justify-between items-center text-xl font-bold text-white">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button 
                onClick={handleSendOrder}
                className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-500"
                disabled={!name || !address}
            >
              Enviar Pedido por WhatsApp
            </button>
            <button onClick={onClearCart} className="w-full text-center text-sm text-gray-400 hover:text-red-500 mt-2">Vaciar Carrito</button>
          </div>
        )}
      </div>
    </div>
  );
};
