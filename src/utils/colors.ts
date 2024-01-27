import { Color } from "@/utils/types";

interface ColorCategory {
  title: string;
  id: string;
  price: number;
  colors: Color[];
}

export const COLORS_CATEGORIES: ColorCategory[] = [
  {
    title: "Matte",
    id: "matte",
    price: 0,
    colors: [
      { id: 'light-gray', name: 'Light Gray', code: '#D2D1CD', finish: 'matte' },
      { id: 'gray', name: 'Gray', code: '#6D6E71', finish: 'matte' },
      { id: 'nintendo-red', name: 'Nintendo Red', code: '#FF0101', finish: 'matte' },
      { id: 'light-blue', name: 'Light Blue', code: '#A0EEFF', finish: 'matte' },
      { id: 'blue', name: 'Blue', code: '#00A0FF', finish: 'matte' },
      { id: 'light-purple', name: 'Light Purple', code: '#C8C7FF', finish: 'matte' },
      { id: 'purple', name: 'Purple', code: '#8165FF', finish: 'matte' },
      { id: 'light-pink', name: 'Light Pink', code: '#FFCBE7', finish: 'matte' },
      { id: 'pink', name: 'Pink', code: '#FB13E3', finish: 'matte' },
      { id: 'light-orange', name: 'Light Orange', code: '#FFDD8B', finish: 'matte' },
      { id: 'orange', name: 'Orange', code: '#FE6D00', finish: 'matte' },
      { id: 'light-green', name: 'Light Green', code: '#B3F87A', finish: 'matte' },
      { id: 'green', name: 'Green', code: '#00B600', finish: 'matte' }
    ]
  },
  {
    title: "Polished",
    id: "polished",
    price: 5.99,
    colors: [
      { id: 'polished-black', name: 'Polished Black', code: '#242E26', finish: 'polished' },
      { id: 'light-polished-gray', name: 'Light Polished Gray', code: '#D2D1CD', finish: 'polished' },
      { id: 'polished-blue', name: 'Polished Blue', code: '#00A0FF', finish: 'polished' },
      { id: 'light-polished-blue', name: 'Light Polished Blue', code: '#A0EEFF', finish: 'polished' },
      { id: 'polished-purple', name: 'Polished Purple', code: '#8165FF', finish: 'polished' },
      { id: 'light-polished-purple', name: 'Light Polished Purple', code: '#C8C7FF', finish: 'polished' },
      { id: 'polished-pink', name: 'Polished Pink', code: '#FB13E3', finish: 'polished' },
      { id: 'light-polished-pink', name: 'Light Polished Pink', code: '#FFCBE7', finish: 'polished' },
      { id: 'polished-orange', name: 'Polished Orange', code: '#FE6D00', finish: 'polished' },
      { id: 'light-polished-orange', name: 'Light Polished Orange', code: '#FFDD8B', finish: 'polished' },
      { id: 'polished-green', name: 'Polished Green', code: '#00B600', finish: 'polished' },
      { id: 'light-polished-green', name: 'Light Polished Green', code: '#B3F87A', finish: 'polished' }
    ]
  },
  {
    title: "Metallic",
    id: "metallic",
    price: 9.99,
    colors: [
      { id: 'silver', name: 'Silver', code: '#F2F1ED', finish: 'metallic' },
      { id: 'titanium', name: 'Titanium', code: '#6d6e71', finish: 'metallic' },
      { id: 'gold', name: 'Gold', code: '#d4bf79', finish: 'metallic' },
      { id: 'rose-gold', name: 'Rose Gold', code: '#E0BFB8', finish: 'metallic' },
      { id: 'copper', name: 'Copper', code: '#d49a64', finish: 'metallic' },
      { id: 'mario-metal', name: 'Mario Metal', code: '#FF6666', finish: 'metallic' }
    ]
  }
]

export const getColorFromId = (id: string) => {
  for (const category of COLORS_CATEGORIES) {
    const foundColor = category.colors.find((color) => color.id === id);
    if (foundColor) {
      return foundColor;
    }
  }
  return null;
}

export const getColorPrice = (id: string) => {
  for (const category of COLORS_CATEGORIES) {
    const foundColor = category.colors.find((color) => color.id === id);
    if (foundColor) {
      return category.price;
    }
  }
  return null;
}