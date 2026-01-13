import "./PotentialCard.css";
import type { SSPotential } from "@/lib/types";
import { useSelectedPotentialsStore } from "@/lib/store";
import { Tooltip } from "./ui/tooltip";

// TODO: Maybe just pass the whole potential
interface Props {
  category: "main" | "sup1" | "sup2";
  potential: SSPotential;
}

export const PotentialCard = ({ category, potential }: Props) => {
  const bgSrc = `/potentials/cards/vestige_${potential.rarity}.png`;
  const iconSrc = `https://res.cloudinary.com/dafqr01it/image/upload/v1763084273/ss/potential/${potential.imgId}_A.png`;
  // const subIconUrl = `https://res.cloudinary.com/dafqr01it/image/upload/v1763084273/ss/potential/Potential_${potential.subIcon}_A.png`

  const selectedPotentialsStore = useSelectedPotentialsStore();

  return (
    <Tooltip content={potential.briefDesc} openDelay={1000} closeDelay={0}>
      <div className="potential-card" data-selected={selectedPotentialsStore[category].includes(potential.id)} onClick={() => selectedPotentialsStore.togglePotential(category, potential.id)}>
        <img className="background" draggable="false" src={bgSrc} alt="Vite logo" />
        {potential.imgId && <img className="icon" draggable="false" src={iconSrc} alt={name + " icon"} />}
        <span className="name">{potential.name}</span>
      </div>
    </Tooltip>
  );
};
