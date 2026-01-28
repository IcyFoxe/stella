import "./PotentialCard.css";
import type { SSPotential } from "@/lib/types";
import { useObtainedPotentialsStore, useSelectedPotentialsStore } from "@/lib/store";
import { Tooltip } from "./ui/tooltip";

interface Props {
  category: "main" | "sup1" | "sup2";
  potential: SSPotential;
}

export const PotentialCard = ({ category, potential }: Props) => {
  const bgSrc = `potentials/cards/vestige_${potential.rarity}.png`;
  const iconSrc = `https://res.cloudinary.com/dafqr01it/image/upload/v1763084273/ss/potential/${potential.imgId}_A.png`;
  // const subIconUrl = `https://res.cloudinary.com/dafqr01it/image/upload/v1763084273/ss/potential/Potential_${potential.subIcon}_A.png`

  const selectedPotentialsStore = useSelectedPotentialsStore();
  const obtainedPotentialsStore = useObtainedPotentialsStore();
  const obtainedPotentials = useObtainedPotentialsStore((s) => s.potentials);

  const cardClick = (category: "main" | "sup1" | "sup2", id: number) => {
    if (obtainedPotentialsStore.active) {
      obtainedPotentialsStore.togglePotential(id);
      return;
    }

    selectedPotentialsStore.togglePotential(category, id);
  };

  return (
    <Tooltip content={potential.briefDesc} openDelay={1000} closeDelay={0}>
      <div
        className="potential-card"
        data-selected={selectedPotentialsStore[category].includes(potential.id)}
        data-obtained={obtainedPotentials.includes(potential.id)}
        onClick={() => cardClick(category, potential.id)}
      >
        <img className="background" draggable="false" src={bgSrc} alt="" />
        {potential.imgId && <img className="icon" draggable="false" src={iconSrc} alt={name + " icon"} />}
        <span className="name">{potential.name}</span>
      </div>
    </Tooltip>
  );
};
