import React, { useState, useEffect } from 'react';
import type { MenuItem, CustomizationChoice, CustomizationOption } from '../types';

interface CustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem;
  onSubmit: (options: CustomizationChoice[]) => void;
}

const CloseIcon: React.FC<{className?: string}> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;

export const CustomizationModal: React.FC<CustomizationModalProps> = ({ isOpen, onClose, item, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, CustomizationChoice[]>>({});

  useEffect(() => {
    // Initialize selections when the modal opens or the item changes
    const initialSelections: Record<string, CustomizationChoice[]> = {};
    item.options?.forEach(opt => {
      if (opt.type === 'radio' && opt.choices.length > 0) {
        // Pre-select the first option for radio inputs
        initialSelections[opt.title] = [opt.choices[0]];
      } else {
         // For checkboxes, start with an empty selection
        initialSelections[opt.title] = [];
      }
    });
    setSelectedOptions(initialSelections);
  }, [item, isOpen]);

  if (!isOpen) return null;

  const handleOptionChange = (option: CustomizationOption, choice: CustomizationChoice) => {
    setSelectedOptions(prev => {
      const { title, type } = option;
      const newSelections = { ...prev };

      if (type === 'radio') {
        newSelections[title] = [choice];
      } else { // Handle checkbox
        const currentSelection = prev[title] || [];
        const choiceIndex = currentSelection.findIndex(c => c.name === choice.name);
        if (choiceIndex > -1) {
          // If already selected, remove it
          newSelections[title] = currentSelection.filter(c => c.name !== choice.name);
        } else {
          // If not selected, add it
          newSelections[title] = [...currentSelection, choice];
        }
      }
      return newSelections;
    });
  };

  const handleSubmit = () => {
    const optionsArray = Object.values(selectedOptions).flat();
    onSubmit(optionsArray);
  };

  const calculateFinalPrice = () => {
    // Find if there is a radio option group that sets the price (like Poke Bowl protein)
    const priceSettingOption = item.options?.find(opt => opt.type === 'radio' && opt.choices.some(c => c.price !== undefined));
    
    if (priceSettingOption) {
      // If such a group exists, find the selected choice in that group
      const selectedChoice = selectedOptions[priceSettingOption.title]?.[0];
      // Use its price if available, otherwise default to item price
      return selectedChoice?.price ?? item.price;
    }
    
    // If no option group sets the price (like for sauces), just use the base item price.
    return item.price;
  };

  const finalPrice = calculateFinalPrice();


  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4">
      <div className="bg-brand-surface rounded-lg shadow-xl w-full max-w-md">
        <div className="p-4 border-b border-gray-600 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Personaliza tu {item.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white"><CloseIcon className="h-6 w-6" /></button>
        </div>

        <div className="p-6 space-y-6">
          {item.options?.map(option => (
            <div key={option.title}>
              <h3 className="text-lg font-semibold text-gray-200 mb-3">{option.title}</h3>
              <div className="space-y-2">
                {option.choices.map(choice => (
                  <label key={choice.name} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600">
                    <div className="flex items-center">
                      <input
                        type={option.type}
                        name={option.title}
                        value={choice.name}
                        checked={selectedOptions[option.title]?.some(c => c.name === choice.name)}
                        onChange={() => handleOptionChange(option, choice)}
                        className="h-5 w-5 text-brand-red bg-gray-800 border-gray-600 focus:ring-brand-red"
                      />
                      <span className="ml-3 text-white">{choice.name}</span>
                    </div>
                    {choice.price !== undefined && <span className="text-brand-yellow font-semibold">${choice.price.toFixed(2)}</span>}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-gray-800 flex justify-between items-center">
            <span className="text-xl font-bold text-white">
                Total: ${finalPrice.toFixed(2)}
            </span>
            <button
              onClick={handleSubmit}
              className="bg-brand-red text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors"
            >
              Agregar al Pedido
            </button>
        </div>
      </div>
    </div>
  );
};