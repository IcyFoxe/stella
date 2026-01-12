import { create } from "zustand";
import type { SSCharacter, SSPotential } from "./types";

interface DataStore {
  characters: { [key: number]: SSCharacter } | null;
  potentials: Record<string, Record<string, SSPotential>> | null;
  setCharacters: (data: DataStore["characters"]) => void;
  setPotentials: (data: DataStore["potentials"]) => void;
}

export const useDataStore = create<DataStore>((set) => ({
  characters: null,
  potentials: null,
  setCharacters: (data) => set({ characters: data }),
  setPotentials: (data) => set({ potentials: data }),
}));

interface SelectedCharactersStore {
  main: SSCharacter | null;
  sup1: SSCharacter | null;
  sup2: SSCharacter | null;
  setCharacter: (key: "main" | "sup1" | "sup2", data: SSCharacter | null) => void;
}

export const useSelectedCharactersStore = create<SelectedCharactersStore>((set) => ({
  main: null,
  sup1: null,
  sup2: null,
  setCharacter: (key, data) =>
    set((state) => {
      const object: Partial<SelectedCharactersStore> = {};

      // Remove existing character
      if (state.main?.id === data?.id) object.main = null;
      if (state.sup1?.id === data?.id) object.sup1 = null;
      if (state.sup2?.id === data?.id) object.sup2 = null;

      object[key] = data;

      return object;
    }),
}));
