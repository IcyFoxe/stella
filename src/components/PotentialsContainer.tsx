import { useSelectedCharactersStore, useSelectedPotentialsStore } from "@/lib/store";
import { CharacterSelectDialog } from "./CharacterSelectDialog";
import { PotentialCard } from "./PotentialCard";
import "./PotentialsContainer.css";
import type { SSPotential } from "@/lib/types";

const INDEX_TO_RARITY: (0 | 1 | 2)[] = [0, 0, 1, 2, 2, 0, 0, 1, 2, 2, 1, 2, 2, 1, 2, 2];
const DEFAULT_POTENTIALS: SSPotential[] = Array.from({ length: 16 }, (_, i) => {
  return { id: i, imgId: "", name: "", briefDesc: "", type: "main", rarity: INDEX_TO_RARITY[i] };
});

const CATEGORY_TO_LABEL = {
  main: "Main",
  sup1: "Support 1",
  sup2: "Support 2",
};

interface Props {
  category: "main" | "sup1" | "sup2";
}

export const PotentialsContainer = ({ category }: Props) => {
  const potentials = useSelectedCharactersStore((s) => s[category]?.potentials);
  const selectedPotentials = useSelectedPotentialsStore((s) => s[category]);

  // Disable pink potentials when max limit reached
  const disabledPotentials: number[] = [];

  if (potentials) {
    const pinkPotentials = potentials.filter((p) => p.rarity === 0).map((p) => p.id);
    const pinkPotentialsSelected = selectedPotentials.filter((p) => pinkPotentials.includes(p));

    if (pinkPotentialsSelected.length >= 2) {
      pinkPotentials.forEach((p) => {
        if (!pinkPotentialsSelected.includes(p)) disabledPotentials.push(p);
      });
    }
  }

  return (
    <div className="potentials-container">
      <h2 className="section-label">{CATEGORY_TO_LABEL[category]}</h2>
      <div className="five-columns">
        {potentials
          ? potentials.map((p) => <PotentialCard category={category} potential={p} disabled={disabledPotentials.includes(p.id)} key={p.id} />)
          : DEFAULT_POTENTIALS.map((p) => <PotentialCard category={category} potential={p} disabled key={p.id} />)}

        <CharacterSelectDialog category={category} />
      </div>
    </div>
  );
};
