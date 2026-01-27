import { useDataStore, useSelectedCharactersStore, useSelectedPotentialsStore } from "@/lib/store";
import "./CharacterList.css";
import type { SSCharacter } from "@/lib/types";

interface Props {
  category: "main" | "sup1" | "sup2";
  onSelect: () => void;
}

export const CharacterList = ({ category, onSelect }: Props) => {
  const dataStore = useDataStore();
  const selectedCharacterStore = useSelectedCharactersStore();
  const selectedPotentialsStore = useSelectedPotentialsStore();

  const characterList = dataStore.characters ? Object.values(dataStore.characters).map((value) => value) : [];
  characterList.sort((a, b) => (a.name > b.name ? 1 : -1));

  const selectCharacter = (character: SSCharacter) => {
    selectedCharacterStore.setCharacter(category, character);

    // Update characters IDs in the selected potentials store
    const charactersNew = { ...selectedPotentialsStore.characters };
    charactersNew[category] = character.id;
    selectedPotentialsStore.setCharacters(charactersNew);
    selectedPotentialsStore.setPotentials(category, []);

    onSelect();
  };

  return (
    <div className="character-list">
      {characterList.map((character) => (
        <div className="character" key={character.id} data-rarity={character.star} onClick={() => selectCharacter(character)}>
          <img
            alt={character.name + " portrait"}
            className="block w-full h-full object-cover"
            fetchPriority="high"
            src={`https://res.cloudinary.com/dafqr01it/image/upload/v1762945238/ss/avatar/head_${character.id}01_XL.png`}
          />
          <span className="character-name">{character.name}</span>
        </div>
      ))}
    </div>
  );
};
