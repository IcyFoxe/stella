import { useState } from "react";
import "./PotentialCard.css";

interface Props {
  rarity: 0 | 1 | 2;
}

export const PotentialCard = ({ rarity }: Props) => {
  const bgSrc = `/potentials/cards/vestige_${rarity}.png`;

  const [selected, setSelected] = useState(false);

  return (
    <div className="potential-card" data-selected={selected} onClick={() => setSelected(!selected)}>
      <img src={bgSrc} className="background" alt="Vite logo" draggable="false" />
    </div>
  );
};
