export interface SSCharacter {
  id: number;
  name: string;
  star: number;
  element: string;
  class: string;
  attackType: string;
  tag: Array<string>;
}

export interface SSCharacterDetailed extends SSCharacter {
  potentials: Array<SSPotential>;
}

export interface SSPotential {
  name: string;
  briefDesc: string;
  type: "main" | "common" | "support";
  rarity: 0 | 1 | 2;
  imgId: string;
  id: number;
  subIcon?: "Diamond" | "Common" | "Round";
}
