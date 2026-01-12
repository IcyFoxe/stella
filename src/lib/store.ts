import { create } from "zustand";
import type { SSCharacter, SSPotential } from "./types";

interface DataStore {
  characters: { [key: number]: SSCharacter | undefined } | null;
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
