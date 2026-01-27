import type { SelectedPotentialsData } from "@/lib/store";

interface LocalStorageSchema {
  builds: { name: string; data: SelectedPotentialsData }[];
}

const DEFAULT_VALUES: LocalStorageSchema = {
  builds: [],
};

export const storage = {
  set: <K extends keyof LocalStorageSchema>(key: K, value: LocalStorageSchema[K]) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: <K extends keyof LocalStorageSchema>(key: K): LocalStorageSchema[K] => {
    const value = localStorage.getItem(key);
    if (value === null) return DEFAULT_VALUES[key];
    return JSON.parse(value);
  },
  remove: <K extends keyof LocalStorageSchema>(key: K) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};
