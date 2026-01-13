import { useSelectedCharactersStore } from "@/lib/store";
import { CharacterSelectDialog } from "./CharacterSelectDialog";
import { PotentialCard } from "./PotentialCard";
import "./PotentialsContainer.css";

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
      <div className="five-columns">
        {potentials ? (
          potentials.map((p) => <PotentialCard rarity={p.rarity} imgId={p.imgId} subIcon={p.subIcon} name={p.name} key={p.id} />)
        ) : (
          <>
            <PotentialCard rarity={0} imgId="" name="" />
            <PotentialCard rarity={0} imgId="" name="" />
            <PotentialCard rarity={1} imgId="" name="" />
            <PotentialCard rarity={2} imgId="" name="" />
            <PotentialCard rarity={2} imgId="" name="" />

            <PotentialCard rarity={0} imgId="" name="" />
            <PotentialCard rarity={0} imgId="" name="" />
            <PotentialCard rarity={1} imgId="" name="" />
            <PotentialCard rarity={2} imgId="" name="" />
            <PotentialCard rarity={2} imgId="" name="" />

            <PotentialCard rarity={1} imgId="" name="" />
            <PotentialCard rarity={2} imgId="" name="" />
            <PotentialCard rarity={2} imgId="" name="" />

            <PotentialCard rarity={2} imgId="" name="" />
            <PotentialCard rarity={2} imgId="" name="" />
            <PotentialCard rarity={2} imgId="" name="" />
          </>
        )}

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
