export interface CustomizationChoice {
  name: string;
  price?: number; 
}

export interface CustomizationOption {
  title: string;
  type: 'radio' | 'checkbox'; // radio for single choice, checkbox for multiple
  choices: CustomizationChoice[];
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  options?: CustomizationOption[];
}

export interface MenuCategory {
  name: string;
  description?: string;
  items: MenuItem[];
}

// FIX: Changed `CartItem` to extend `Omit<MenuItem, 'options'>` to resolve type conflict.
// The `options` property in `MenuItem` represents available customization options (`CustomizationOption[]`),
// while in `CartItem` it represents the selected choices (`CustomizationChoice[]`).
// Extending `MenuItem` directly created an incompatible override. `Omit` removes the original
// `options` property before `CartItem` adds its own version.
export interface CartItem extends Omit<MenuItem, 'options'> {
  quantity: number;
  options: CustomizationChoice[];
  cartItemId: string;
}
