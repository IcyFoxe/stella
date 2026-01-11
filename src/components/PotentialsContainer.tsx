import { PotentialCard } from "./PotentialCard";
import "./PotentialsContainer.css";

export const PotentialsContainer = () => {
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
        <PotentialCard rarity={0} />
        <PotentialCard rarity={0} />
        <PotentialCard rarity={1} />
        <PotentialCard rarity={2} />
        <PotentialCard rarity={2} />
      </div>

      <div className="five-columns">
        <PotentialCard rarity={0} />
        <PotentialCard rarity={0} />
        <PotentialCard rarity={1} />
        <PotentialCard rarity={2} />
        <PotentialCard rarity={2} />
      </div>

      <div className="five-columns">
        <div />
        <div />
        <PotentialCard rarity={1} />
        <PotentialCard rarity={2} />
        <PotentialCard rarity={2} />
      </div>

      <div className="five-columns">
        <div />
        <div />
        <PotentialCard rarity={2} />
        <PotentialCard rarity={2} />
        <PotentialCard rarity={2} />
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
