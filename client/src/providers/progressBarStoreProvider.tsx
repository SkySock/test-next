"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";

import { useStore } from "zustand";
import {
  type ProgressBarStore,
  createProgressBarStore,
  initProgressBarStore,
} from "@/store/progressBarStore";

export type ProgressBarStoreApi = ReturnType<typeof createProgressBarStore>;

export const ProgressBarStoreContext = createContext<
  ProgressBarStoreApi | undefined
>(undefined);

export interface ProgressBarStoreProviderProps {
  children: ReactNode;
}

export const ProgressBarStoreProvider = ({
  children,
}: ProgressBarStoreProviderProps) => {
  const storeRef = useRef<ProgressBarStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createProgressBarStore(initProgressBarStore());
  }

  return (
    <ProgressBarStoreContext.Provider value={storeRef.current}>
      {children}
    </ProgressBarStoreContext.Provider>
  );
};

export const useProgressBarStore = <T,>(
  selector: (store: ProgressBarStore) => T
): T => {
  const progressBarStoreContext = useContext(ProgressBarStoreContext);

  if (!progressBarStoreContext) {
    throw new Error(
      `useProgressBarStore must be used within ProgressBarStoreProvider`
    );
  }

  return useStore(progressBarStoreContext, selector);
};
