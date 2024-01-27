import { create } from 'zustand'
import { Color } from './types'
import { getColorFromId, getColorPrice } from "@/utils/colors";
import { setUrlParameter, getUrlParameter } from './url.utils';

interface Item {
  value: string;
  price: number;
}

interface Cart {
  basePrice: number;
  topCoverPrice: number;
  bottomCoverPrice: number;
  controlBarPrice: number;
  letteringPrice: number;
  accessories?: Item[];
}

interface Store {
  cameraPosition: { x: number, y: number, z: number };
  cameraZoom: number;
  topCoverColor: Color;
  bottomCoverColor: Color;
  controlBarColor: Color;
  letteringColor: Color;
  cart: Cart;
  setCameraPosition: (x: number, y: number, z: number) => void;
  setCameraZoom: (distance: number) => void;
  setCamera: (x: number, y: number, z: number, distance: number) => void;
  setTopCoverColor: (color: Color) => void;
  setBottomCoverColor: (color: Color) => void;
  setControlBarColor: (color: Color) => void;
  setLetteringColor: (color: Color) => void;
}

const setDefaultColor = (key: string, color: string) => {
  let colorId = getUrlParameter(key);
  if (!colorId || getColorFromId(colorId)==null) colorId = color;
  return getColorFromId(colorId) as Color;
}

const setDefaultPrice = (key: string, color: string) => {
  let colorId = getUrlParameter(key);
  if (!colorId || getColorFromId(colorId)==null) colorId = color;
  return getColorPrice(colorId) as number;
}

const useStore = create<Store>()((set) => ({
  cameraPosition: { x: 0, y: 0, z: 0 },
  cameraZoom: 0,
  topCoverColor: setDefaultColor("top-cover", "light-gray"),
  bottomCoverColor: setDefaultColor("bottom-cover", "gray"),
  controlBarColor: setDefaultColor("control-bar", "polished-black"),
  letteringColor: setDefaultColor("lettering", "nintendo-red"),
  cart: {
    basePrice: 150,
    topCoverPrice: setDefaultPrice("top-cover", "light-gray"),
    bottomCoverPrice: setDefaultPrice("bottom-cover", "gray"),
    controlBarPrice: setDefaultPrice("control-bar", "polished-black"),
    letteringPrice: setDefaultPrice("lettering", "nintendo-red")
  },
  setCameraPosition: (x: number, y: number, z: number) => set(() => ({ cameraPosition: {x, y, z} })),
  setCameraZoom: (distance: number) => set(() => ({ cameraZoom: distance })),
  setCamera: (x: number, y: number, z: number, distance: number) => set(() => ({ cameraPosition: {x, y, z}, cameraZoom: distance })),
  setTopCoverColor: (color: Color) => {
    set((state) => ({ 
      topCoverColor: color, 
      cart: {
        ...state.cart, 
        topCoverPrice: getColorPrice(color.id)!
      }
    }));
    setUrlParameter('top-cover', color.id);
  },
  setBottomCoverColor: (color: Color) => {
    set((state) => ({ 
      bottomCoverColor: color, 
      cart: {
        ...state.cart, 
        bottomCoverPrice: getColorPrice(color.id)!
      }
    }));
    setUrlParameter('bottom-cover', color.id);
  },
  setControlBarColor: (color: Color) => {
    set((state) => ({ 
      controlBarColor: color, 
      cart: {
        ...state.cart, 
        controlBarPrice: getColorPrice(color.id)!
      }
    }));
    setUrlParameter('control-bar', color.id);
  },
  setLetteringColor: (color: Color) => {
    set((state) => ({ 
      letteringColor: color, 
      cart: {
        ...state.cart, 
        letteringPrice: getColorPrice(color.id)!
      }
    }));
    setUrlParameter('lettering', color.id);
  }
}))

export { useStore };