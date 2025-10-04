import type { MenuCategory } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    name: 'Sushi Clásicos',
    description: 'En su interior aguacate cremoso, pepino fresco, zanahoria y queso crema.',
    items: [
      { id: 'maki', name: 'Sushi Maki', price: 85, description: 'Relleno de surimi fresco. Envuelto en alga nori coronado con deliciosa ensalada de surimi, salsa de anguila y aderezo de la casa.' },
      { id: 'california', name: 'Sushi California', price: 90, description: 'Relleno de camarón. Coronado con deliciosa ensalada de surimi, salsa de anguila y aderezo de la casa.' },
      { id: 'tampico-roll', name: 'Sushi Tampico Roll', price: 85, description: 'Relleno de atún fresco. Coronado con deliciosa ensalada tampico, salsa de anguila y aderezo de la casa.' },
      { id: 'chicken-roll', name: 'Sushi Chicken Roll', price: 85, description: 'Relleno de pollo empanizado. Coronado con deliciosa ensalada de surimi, salsa de anguila y aderezo de la casa.' },
      { id: 'mar-tierra', name: 'Sushi Mar y Tierra', price: 95, description: 'Relleno de jugos a carne de res a la parrilla y camarón. Coronado con deliciosa ensalada de surimi, salsa de anguila y aderezo de la casa.' },
    ],
  },
  {
    name: 'Sushi Especiales',
    description: 'Los nuevos sushis especiales en el Restaurante.',
    items: [
      { id: 'tocino-crunch', name: 'Tocino Crunch Roll', price: 115, description: 'Rollo gratinado cubierto con una capa de tocino dorado y crujiente. Interior de surimi fresco, zanahoria, pepino, aguacate cremoso y queso crema.' },
      { id: 'sushi-dragon-verde', name: 'Sushi Dragón Verde', price: 125, description: 'Interior relleno de surimi fresco, cremoso aguacate y queso philadelphia. Cubierto de lonchas finas de salmón ahumado y aguacate, salsa anguila y un toque crujiente de cebolla frita.' },
      { id: 'sushi-explosion', name: 'Sushi Explosión de Sabores', price: 135, description: 'Relleno jugoso de camarón empanizado crujiente, aguacate y pepino. Superior con mix de atún fresco y masago. Cubierto con salsa de dinamita picante.' },
      { id: 'sushi-ninja', name: 'Sushi Ninja', price: 150, description: 'Envuelto en alga nori, con relleno de camarón, queso crema, pepino fresco. Cobertura de salmón ahumado, salsa teriyaki, y toque de masago.' },
      { id: 'sushi-filadelfia-deluxe', name: 'Sushi Filadelfia Deluxe', price: 100, description: 'Queso filadelfia cremoso, trozos frescos de salmón, aguacate y pepino.' },
      { id: 'sushi-tropical-pina', name: 'Sushi Tropical Piña', price: 120, description: 'Piña, camarones tempura, queso filadelfia, aguacate. Decorado con salsa anguila, piña, coco tostado y ajonjolí.' },
      { id: 'sushi-deli-supremo', name: 'Sushi Deli Supremo', price: 110, description: 'Camarón, queso crema, aguacate, pepino, zanahoria. Coronado con ensalada de surimi y camarones empanizados.' },
      { id: 'golden-banana-roll', name: 'Golden Banana Roll', price: 105, description: 'Relleno de surimi fresco, queso crema, aguacate, pepino. Cubierto por finas láminas de plátano maduro.' },
      { id: 'sushi-gratinado', name: 'Sushi Gratinado con Queso', price: 105, description: 'Relleno de camarón, aguacate, pepino y queso crema. En la parte superior una capa de queso gratinado.' },
      { id: 'sushi-deli-especial', name: 'Sushi Deli Especial', price: 110, description: 'Interior con camarón, queso crema, aguacate, pepino y zanahoria. Decorado con ensalada de surimi, camarón y cebollin fresco.' },
      { id: 'compostela-especial', name: 'Compostela Especial', price: 155, description: 'Interior con arrachera, aguacate, pepino, queso crema y tocino. Cubierto con queso gratinado, arrachera y chile serrano.' },
    ],
  },
  {
    name: 'Entradas',
    items: [
      { id: 'ord-surimi', name: 'Ord. Ensalada Surimi', price: 65 },
      { id: 'ord-tampico', name: 'Ord. Tampico', price: 85 },
      { id: 'dumpling', name: 'Dumpling', price: 80 },
      { id: 'gyosas', name: 'Gyosas', price: 85 },
      { id: 'dedos-canicama', name: 'Dedos Canicama', price: 75 },
      { id: 'nachos-clasicos', name: 'Nachos Clásicos', price: 65 },
      { id: 'nachos-carne', name: 'Nachos con Carne', price: 85 },
      { id: 'papas-francesa', name: 'Papas Francesa', price: 50 },
      { id: 'papas-gajo', name: 'Papas Gajo', price: 55 },
      { id: 'sashimi-atun', name: 'Sashimi (atún)', price: 90 },
      { id: 'edamames', name: 'Edamames', price: 85 },
    ]
  },
  {
    name: 'Snacks',
    items: [
      { id: 'nuggets', name: 'Nuggets', price: 60 },
      { id: 'aros-cebolla', name: 'Aros de Cebolla', price: 60 },
      { id: 'palomitas-pollo', name: 'Palomitas de Pollo', price: 60 },
      { id: 'dedos-queso', name: 'Dedos de Queso', price: 85 },
      { 
        id: 'alitas', 
        name: 'Alitas', 
        price: 100,
        options: [{
          title: "Elige tu salsa (selección múltiple)",
          type: 'checkbox',
          choices: [
            { name: 'BBQ' }, { name: 'Bufalo' }, { name: 'Mango Habanero' }, { name: 'Ajo Parmesano' }, { name: 'Mixtas' }
          ]
        }]
      },
      { 
        id: 'boneless', 
        name: 'Boneless', 
        price: 95,
        options: [{
          title: "Elige tu salsa (selección múltiple)",
          type: 'checkbox',
          choices: [
            { name: 'BBQ' }, { name: 'Bufalo' }, { name: 'Mango Habanero' }, { name: 'Ajo Parmesano' }, { name: 'Mixtas' }
          ]
        }]
      },
      { id: 'tiras-pollo', name: 'Tiras de Pollo', price: 95 },
    ]
  },
  {
    name: 'Yakimeshis',
    description: 'Preparados con arroz frito, vegetales picados. Decorado con ensalada tampico, aguacate, salsa anguila y aderezo.',
    items: [
      { id: 'yakimeshi-res', name: 'Yakimeshi de Res', price: 90 },
      { id: 'yakimeshi-camaron', name: 'Yakimeshi de Camarón', price: 95 },
      { id: 'yakimeshi-pollo', name: 'Yakimeshi de Pollo', price: 85 },
      { id: 'yakimeshi-vegetariano', name: 'Yakimeshi Vegetariano', price: 80 },
      { id: 'yakimeshi-especial', name: 'Yakimeshi Especial (res, camarón y pollo)', price: 110 },
    ]
  },
  {
      name: 'Poke Bowl',
      description: 'Arroz de sushi como base cubierto con proteína y variedad de ingredientes frescos.',
      items: [
          {
              id: 'poke-bowl',
              name: 'Poke Bowl',
              price: 0, // Price is determined by protein choice
              description: 'Es un platillo que consiste en arroz de sushi como base cubierto con alguna proteína. Se complementa con una variedad de ingredientes frescos. Como aguacate, alga, edamame, cebollin, zanahoria, pepino y piña en almíbar.',
              options: [{
                  title: 'Elige tu proteína',
                  type: 'radio',
                  choices: [
                      { name: 'Res', price: 100 },
                      { name: 'Camarón', price: 110 },
                      { name: 'Atún', price: 125 },
                      { name: 'Salmón', price: 150 },
                      { name: 'Surimi', price: 90 },
                      { name: 'Canikama', price: 100 },
                  ]
              }]
          }
      ]
  },
  {
    name: 'Hamburguesas',
    description: 'Jugosa carne de calidad Angus, acompañada de crujientes papas francesas.',
    items: [
      { id: 'h-jugosa-clasica', name: 'La Jugosa Clásica', price: 95, description: 'Carne angus, queso amarillo.' },
      { id: 'h-doble-sabor', name: 'Doble Sabor', price: 135, description: '2 carnes angus, 2 quesos amarillos.' },
      { id: 'h-asadera', name: 'Asadera', price: 105, description: 'Carne angus, queso cheddar, tocino crujiente.' },
      { id: 'h-delicia-ahumada', name: 'Delicia Ahumada', price: 120, description: 'Carne angus, queso cheddar, tocino crujiente, chuleta ahumada.' },
      { id: 'h-rustica-bbq', name: 'Rústica BBQ', price: 115, description: 'Carne angus, queso cheddar, salsa bbq, cebolla caramelizada, tocino.' },
      { id: 'h-fuego-texano', name: 'Fuego Texano', price: 110, description: 'Carne angus, queso amarillo, base de jalapeños, salsa bufalo.' },
      { id: 'h-picante-mexicana', name: 'Picante Mexicana', price: 115, description: 'Carne angus, queso cheddar, chorizo asadero, pimientos.' },
      { id: 'h-aguacate-supreme', name: 'Aguacate Supreme', price: 115, description: 'Carne angus, queso cheddar, aguacate.' },
      { id: 'h-chili-crunch', name: 'Chili Crunch', price: 125, description: 'Carne angus, queso amarillo, jalapeños poppers, cebolla crujiente.' },
      { id: 'h-boneless-crunch', name: 'Boneless Crunch Burguer', price: 155, description: 'Carne angus, boneless, queso cheddar, aros de cebolla.' },
      { id: 'h-champiqueso', name: 'Champiqueso', price: 110, description: 'Carne angus, queso cheddar, champiñones, tocino.' },
      { id: 'h-hawaiana', name: 'Hawaiana', price: 110, description: 'Carne angus, queso cheddar, piña, tocino, cebolla.' },
      { id: 'h-de-camaron', name: 'De Camarón', price: 115, description: 'Camarón salteado, queso cheddar, queso amarillo, pimientos, tocino.' },
      { id: 'h-deli-especial', name: 'Deli Especial', price: 125, description: 'Carne angus, queso cheddar, queso amarillo, salchicha, tocino, pepperoni.' },
      { id: 'h-deli-suprema', name: 'Deli Suprema', price: 130, description: 'Carne angus, queso cheddar, queso amarillo, tocino, salchicha, pepperoni, aros de cebolla.' },
      { id: 'h-italian-twis', name: 'Italian Twis Burguer', price: 120, description: 'Carne angus, queso cheddar, pepperoni.' },
      { id: 'h-mar-y-tierra', name: 'Mar y Tierra Burger', price: 140, description: 'Carne de res, camarones salteados, queso derretido, salsa especial.' },
      { id: 'h-krugchiken', name: 'KrugChiken', price: 130, description: 'Pechuga de pollo empanizada, pan brioche, lechuga, tomate, salsa especial.' },
    ]
  },
  {
    name: 'Bebidas',
    items: [
      { id: 'limonada-natural', name: 'Limonada Natural', price: 35, options: [{ title: 'Tamaño', type: 'radio', choices: [{name: 'Medio Litro', price: 35}, {name: 'Litro', price: 55}]}]},
      { id: 'limonada-mineral', name: 'Limonada Mineral', price: 40, options: [{ title: 'Tamaño', type: 'radio', choices: [{name: 'Medio Litro', price: 40}, {name: 'Litro', price: 60}]}]},
      { id: 'te-helado', name: 'Té Helado', price: 30, options: [{ title: 'Tamaño', type: 'radio', choices: [{name: 'Medio Litro', price: 30}, {name: 'Litro', price: 40}]}]},
      { id: 'margarita-pina', name: 'Margarita Frozen Piña', price: 60 },
      { id: 'margarita-mango', name: 'Margarita Frozen Mango', price: 60 },
      { id: 'margarita-fresa', name: 'Margarita Frozen Fresa', price: 60 },
      { id: 'margarita-tamarindo', name: 'Margarita Frozen Tamarindo', price: 60 },
      { id: 'frappe-moka', name: 'Frappé Moka', price: 60 },
      { id: 'frappe-oreo', name: 'Frappé Oreo', price: 65 },
      { id: 'frappe-cajeta', name: 'Frappé Cajeta', price: 65 },
      { id: 'pinada', name: 'Piñada', price: 60 },
      { id: 'fresada', name: 'Fresada', price: 60 },
      { id: 'sangria', name: 'Sangría', price: 60 },
      { id: 'clericot', name: 'Clericot', price: 70 },
      { id: 'ramune', name: 'Ramune', price: 50 },
      { id: 'smoothie-chocolate', name: 'Smoothie Chocolate', price: 65 },
      { id: 'smoothie-fresa', name: 'Smoothie Fresa', price: 65 },
      { id: 'smoothie-vainilla', name: 'Smoothie Vainilla', price: 65 },
      { id: 'mojito-fantasma', name: 'Mojito Fantasma', price: 55, options: [{ title: 'Sabor', type: 'radio', choices: [{name: 'Fresa'}, {name: 'Mango'}, {name: 'Maracuyá'}]}]},
      { id: 'refrescos-600ml', name: 'Refresco 600ml', price: 30, description: 'Coca Cola, Fanta, Sprite, Mundet' },
      { id: 'coca-lata', name: 'Coca Cola Lata', price: 20 },
    ]
  }
];
