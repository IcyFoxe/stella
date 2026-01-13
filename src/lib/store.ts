import { create } from "zustand";
import type { SSCharacter, SSCharacterDetailed, SSPotential } from "./types";

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
  main: SSCharacterDetailed | null;
  sup1: SSCharacterDetailed | null;
  sup2: SSCharacterDetailed | null;
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

      if (!data) {
        object[key] = null;
        return object;
      }

      const allPotentials = useDataStore.getState().potentials;
      if (!allPotentials) throw new Error("Potentials list missing");

      let potentials = Object.values(allPotentials[data.id]);

      // Filter for type
      potentials = potentials.filter((p) => (key === "main" ? p.type === "main" : p.type === "support") || p.type === "common");

      const rarity0 = potentials.filter((p) => p.rarity === 0);
      const rarity1 = potentials.filter((p) => p.rarity === 1);
      const rarity2 = potentials.filter((p) => p.rarity === 2);

      // Order for grid
      const orderedPotentials = [...rarity0.slice(0, 2), rarity1[0], ...rarity2.slice(0, 2), ...rarity0.slice(2, 4), rarity1[1], ...rarity2.slice(2, 4), rarity1[2], ...rarity2.slice(4)];

      object[key] = { ...data, potentials: orderedPotentials };
      return object;
    }),
}));
