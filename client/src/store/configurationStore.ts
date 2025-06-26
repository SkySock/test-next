import type { StaticImageData } from "next/image";
import { createStore } from "zustand/vanilla";

export type Layout = {
  id: string;
  title: string;
  price: number;
  image: string | StaticImageData;
  street: string;
  rooms: string;
  houseNumber: string;
  description: string;
};

export type City = {
  id: string;
  name: string;
};

export type PriceCategory = {
  id: string;
  name: string;
};

export type InteriorStyle = {
  id: string;
  name: string;
};

export type ConfigurationState = {
  cityFilter: City | null;
  complexFilter: string[];
  roomsFilter: string;
  cities: City[];
  layouts: Layout[];
  selectedLayout: Layout | null;
  selectedPriceCategory: PriceCategory | null;
  selectedInteriorStyle: InteriorStyle | null;
};

export type ConfigurationActions = {
  setCityFilter: (cityFilter: City | null) => void;
  setComplexFilter: (complexFilter: string[]) => void;
  setRoomsFilter: (roomsFilter: string) => void;
  setCities: (cities: City[]) => void;
  setLayouts: (layouts: Layout[]) => void;
  setSelectedLayout: (selectedLayout: Layout | null) => void;
  setSelectedPriceCategory: (category: PriceCategory | null) => void;
  setSelectedInteriorStyle: (style: InteriorStyle | null) => void;
};

export type ConfigurationStore = ConfigurationState & ConfigurationActions;

export const defaultInitState: ConfigurationState = {
  cityFilter: null,
  complexFilter: [],
  roomsFilter: "",
  cities: [],
  layouts: [],
  selectedLayout: null,
  selectedPriceCategory: null,
  selectedInteriorStyle: null,
};

export const initConfigurationStore = (): ConfigurationState => {
  return { ...defaultInitState };
};

export const createConfigurationStore = (
  initState: ConfigurationState = defaultInitState
) =>
  createStore<ConfigurationStore>()((set) => ({
    ...initState,
    setCityFilter: (cityFilter: City | null) => set({ cityFilter }),
    setComplexFilter: (complexFilter: string[]) => set({ complexFilter }),
    setRoomsFilter: (roomsFilter: string) => set({ roomsFilter }),
    setCities: (cities: City[]) => set({ cities }),
    setLayouts: (layouts: Layout[]) => set({ layouts }),
    setSelectedLayout: (selectedLayout: Layout | null) =>
      set({ selectedLayout }),
    setSelectedPriceCategory: (category: PriceCategory | null) =>
      set({ selectedPriceCategory: category }),
    setSelectedInteriorStyle: (style: InteriorStyle | null) =>
      set({ selectedInteriorStyle: style }),
  }));
