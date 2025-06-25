import { createStore } from "zustand/vanilla";

export type ProgressBarState = {
  step: number;
};

export type ProgressBarActions = {
  setStep: (step: number) => void;
};

export type ProgressBarStore = ProgressBarState & ProgressBarActions;

export const initProgressBarStore = (): ProgressBarState => {
  return { ...defaultInitState };
};

export const defaultInitState: ProgressBarState = {
  step: 1,
};

export const createProgressBarStore = (
  initState: ProgressBarState = defaultInitState
) =>
  createStore<ProgressBarStore>()((set) => ({
    ...initState,
    setStep: (step: number) => set({ step }),
  }));
