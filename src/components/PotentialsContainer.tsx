import { useSelectedCharactersStore } from "@/lib/store";
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
  const selectedCharacterStore = useSelectedCharactersStore();
  const potentials = selectedCharacterStore[category]?.potentials;

  return (
    // <div className="potentials-container">
    //   <div className="four-columns">
    //     <PotentialCard rarity={0} />
    //     <PotentialCard rarity={1} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //   </div>

    //   <div className="four-columns">
    //     <PotentialCard rarity={0} />
    //     <PotentialCard rarity={1} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //   </div>
    //   <div className="four-columns">
    //     <PotentialCard rarity={0} />
    //     <PotentialCard rarity={1} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={0} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //   </div>
    // </div>

    // <div className="potentials-container">
    //   <div className="five-columns">
    //     <PotentialCard rarity={0} />
    //     <PotentialCard rarity={0} />
    //     <PotentialCard rarity={1} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //   </div>

    //   <div className="five-columns">
    //     <PotentialCard rarity={0} />
    //     <PotentialCard rarity={0} />
    //     <PotentialCard rarity={1} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //   </div>
    //   <div className="six-columns">
    //     <PotentialCard rarity={1} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //   </div>
    // </div>

    <div className="potentials-container">
      <h2 className="section-label">{CATEGORY_TO_LABEL[category]}</h2>
      <div className="five-columns">
        {potentials
          ? potentials.map((p) => <PotentialCard category={category} potential={p} key={p.id} />)
          : DEFAULT_POTENTIALS.map((p) => <PotentialCard category={category} potential={p} key={p.id} />)}

        <CharacterSelectDialog category={category} />
      </div>
    </div>

    // <div className="potentials-container">
    //   <div className="eight-columns">
    //     <PotentialCard rarity={0} />
    //     <PotentialCard rarity={0} />
    //     <PotentialCard rarity={1} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={1} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //   </div>

    //   <div className="eight-columns">
    //     <PotentialCard rarity={0} />
    //     <PotentialCard rarity={0} />
    //     <PotentialCard rarity={1} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //     <PotentialCard rarity={2} />
    //   </div>
    // </div>
  );
};
