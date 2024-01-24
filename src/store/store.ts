import { create } from 'zustand'

interface NESModelState {
  cameraPosition: { x: number, y: number, z: number };
  cameraZoom: number;
  topCoverColor: { name: string, code: string };
  bottomCoverColor: { name: string, code: string };
  controlBarColor: { name: string, code: string };
  letteringColor: { name: string, code: string };
  setCameraPosition: (x: number, y: number, z: number) => void;
  setCameraZoom: (distance: number) => void;
  setCamera: (x: number, y: number, z: number, distance: number) => void;
  setTopCoverColor: (name: string, code: string) => void;
  setBottomCoverColor: (name: string, code: string) => void;
  setControlBarColor: (name: string, code: string) => void;
  setLetteringColor: (name: string, code: string) => void;
}

const useNESModelStore = create<NESModelState>()((set) => ({
  cameraPosition: { x: 0, y: 0, z: 0 },
  cameraZoom: 0,
  topCoverColor: { name: '', code: '' },
  bottomCoverColor: { name: 'Dark Gray', code: '#6d6e71' },
  controlBarColor: { name: 'Black', code: '#242E26' },
  letteringColor: { name: 'Red', code: '#FF0101' },
  setCameraPosition: (x: number, y: number, z: number) => set(() => ({ cameraPosition: {x, y, z} })),
  setCameraZoom: (distance: number) => set(() => ({ cameraZoom: distance })),
  setCamera: (x: number, y: number, z: number, distance: number) => set(() => ({ cameraPosition: {x, y, z}, cameraZoom: distance })),
  setTopCoverColor: (name: string, code: string) => set(() => ({ topCoverColor: { name, code } })),
  setBottomCoverColor: (name: string, code: string) => set(() => ({ bottomCoverColor: { name, code } })),
  setControlBarColor: (name: string, code: string) => set(() => ({ controlBarColor: { name, code } })),
  setLetteringColor: (name: string, code: string) => set(() => ({ letteringColor: { name, code } }))
}))

export { useNESModelStore };