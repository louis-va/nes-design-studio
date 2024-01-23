import { create } from 'zustand'

interface NESModelState {
  cameraPosition: { x: number, y: number, z: number };
  cameraZoom: number;
  topCoverColor: string;
  bottomCoverColor: string;
  controlBarColor: string;
  letteringColor: string;
  setCameraPosition: (x: number, y: number, z: number) => void;
  setCameraZoom: (distance: number) => void;
  setCamera: (x: number, y: number, z: number, distance: number) => void;
  setTopCoverColor: (color: string) => void;
  setBottomCoverColor: (color: string) => void;
  setControlBarColor: (color: string) => void;
  setLetteringColor: (color: string) => void;
}

const useNESModelStore = create<NESModelState>()((set) => ({
  cameraPosition: { x: 0, y: 0, z: 0 },
  cameraZoom: 0,
  topCoverColor: '#D2D1CD',
  bottomCoverColor: '#6d6e71',
  controlBarColor: '#242E26',
  letteringColor: '#FF0101',
  setCameraPosition: (x: number, y: number, z: number) => set(() => ({ cameraPosition: {x, y, z} })),
  setCameraZoom: (distance: number) => set(() => ({ cameraZoom: distance })),
  setCamera: (x: number, y: number, z: number, distance: number) => set(() => ({ cameraPosition: {x, y, z}, cameraZoom: distance })),
  setTopCoverColor: (color: string) => set(() => ({ topCoverColor: color })),
  setBottomCoverColor: (color: string) => set(() => ({ bottomCoverColor: color })),
  setControlBarColor: (color: string) => set(() => ({ controlBarColor: color })),
  setLetteringColor: (color: string) => set(() => ({ letteringColor: color }))
}))

export { useNESModelStore };