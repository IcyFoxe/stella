import { useState } from "react";
import "./PotentialCard.css";

// TODO: Maybe just pass the whole potential
interface Props {
  rarity: 0 | 1 | 2;
  imgId: string;
  subIcon?: "Diamond" | "Common" | "Round";
  name: string;
}

export const PotentialCard = ({ rarity, imgId, subIcon, name }: Props) => {
  const bgSrc = `/potentials/cards/vestige_${rarity}.png`;
  const iconSrc = `https://res.cloudinary.com/dafqr01it/image/upload/v1763084273/ss/potential/${imgId}_A.png`;
  // const subIconUrl = `https://res.cloudinary.com/dafqr01it/image/upload/v1763084273/ss/potential/Potential_${subIcon}_A.png`

  const [selected, setSelected] = useState(false);

  return (
    <div className="potential-card" data-selected={selected} onClick={() => setSelected(!selected)}>
      <img className="background" draggable="false" src={bgSrc} alt="Vite logo" />
      {imgId && <img className="icon" draggable="false" src={iconSrc} alt={name + " icon"} />}
      <span className="name">{name}</span>
    </div>
  );
};
