import { create } from 'zustand'
import { Color } from './types'
import { getColorFromId } from "@/utils/colors";
import { setUrlParameter, getUrlParameter } from './url.utils';

const setDefaultColor = (key: string, color: string) => {
  let colorId = getUrlParameter(key);
  if (!colorId || getColorFromId(colorId)==null) colorId = color;
  return getColorFromId(colorId) as Color;
}

interface NESModelState {
  cameraPosition: { x: number, y: number, z: number };
  cameraZoom: number;
  topCoverColor: Color;
  bottomCoverColor: Color;
  controlBarColor: Color;
  letteringColor: Color;
  setCameraPosition: (x: number, y: number, z: number) => void;
  setCameraZoom: (distance: number) => void;
  setCamera: (x: number, y: number, z: number, distance: number) => void;
  setTopCoverColor: (color: Color) => void;
  setBottomCoverColor: (color: Color) => void;
  setControlBarColor: (color: Color) => void;
  setLetteringColor: (color: Color) => void;
}

const useNESModelStore = create<NESModelState>()((set) => ({
  cameraPosition: { x: 0, y: 0, z: 0 },
  cameraZoom: 0,
  topCoverColor: setDefaultColor("top-cover", "light-gray"),
  bottomCoverColor: setDefaultColor("bottom-cover", "gray"),
  controlBarColor: setDefaultColor("control-bar", "polished-black"),
  letteringColor: setDefaultColor("lettering", "nintendo-red"),
  setCameraPosition: (x: number, y: number, z: number) => set(() => ({ cameraPosition: {x, y, z} })),
  setCameraZoom: (distance: number) => set(() => ({ cameraZoom: distance })),
  setCamera: (x: number, y: number, z: number, distance: number) => set(() => ({ cameraPosition: {x, y, z}, cameraZoom: distance })),
  setTopCoverColor: (color: Color) => {
    set(() => ({ topCoverColor: color }));
    setUrlParameter('top-cover', color.id);
  },
  setBottomCoverColor: (color: Color) => {
    set(() => ({ bottomCoverColor: color }));
    setUrlParameter('bottom-cover', color.id);
  },
  setControlBarColor: (color: Color) => {
    set(() => ({ controlBarColor: color }));
    setUrlParameter('control-bar', color.id);
  },
  setLetteringColor: (color: Color) => {
    set(() => ({ letteringColor: color }));
    setUrlParameter('lettering', color.id);
  }
}))

export { useNESModelStore };