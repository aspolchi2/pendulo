import { create } from "zustand";

interface BooleanState {
  booleanValue: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

const useBooleanStore = create<BooleanState>((set) => ({
  booleanValue: false,
  setTrue: () => set({ booleanValue: true }),
  setFalse: () => set({ booleanValue: false }),
  toggle: () => set((state) => ({ booleanValue: !state.booleanValue })),
}));

export default useBooleanStore;
