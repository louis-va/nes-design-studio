import { create } from 'zustand'
import { Color } from './types'
import { COLORS_CATEGORIES } from "@/utils/colors";

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
  topCoverColor: COLORS_CATEGORIES[0].colors[0],
  bottomCoverColor: COLORS_CATEGORIES[0].colors[1],
  controlBarColor: COLORS_CATEGORIES[1].colors[0],
  letteringColor: COLORS_CATEGORIES[0].colors[2],
  setCameraPosition: (x: number, y: number, z: number) => set(() => ({ cameraPosition: {x, y, z} })),
  setCameraZoom: (distance: number) => set(() => ({ cameraZoom: distance })),
  setCamera: (x: number, y: number, z: number, distance: number) => set(() => ({ cameraPosition: {x, y, z}, cameraZoom: distance })),
  setTopCoverColor: (color: Color) => set(() => ({ topCoverColor: color })),
  setBottomCoverColor: (color: Color) => set(() => ({ bottomCoverColor: color })),
  setControlBarColor: (color: Color) => set(() => ({ controlBarColor: color })),
  setLetteringColor: (color: Color) => set(() => ({ letteringColor: color }))
}))

export { useNESModelStore };