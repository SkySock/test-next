"use client";

import {
  createConfigurationStore,
  initConfigurationStore,
  type ConfigurationStore,
} from "@/store/configurationStore";
import { createContext, useContext, useRef, type ReactNode } from "react";
import { useStore } from "zustand";

export type ConfigurationStoreApi = ReturnType<typeof createConfigurationStore>;

export const ConfigurationStoreContext = createContext<
  ConfigurationStoreApi | undefined
>(undefined);

export interface ConfigurationStoreProviderProps {
  children: ReactNode;
}

export const ConfigurationStoreProvider = ({
  children,
}: ConfigurationStoreProviderProps) => {
  const storeRef = useRef<ConfigurationStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createConfigurationStore(initConfigurationStore());
  }

  return (
    <ConfigurationStoreContext.Provider value={storeRef.current}>
      {children}
    </ConfigurationStoreContext.Provider>
  );
};

export const useConfigurationStore = <T,>(
  selector: (store: ConfigurationStore) => T
): T => {
  const configurationStoreContext = useContext(ConfigurationStoreContext);

  if (!configurationStoreContext) {
    throw new Error(
      `useConfigurationStore must be used within ConfigurationStoreProvider`
    );
  }

  return useStore(configurationStoreContext, selector);
};
