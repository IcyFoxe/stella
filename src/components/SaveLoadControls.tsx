import { useDataStore, useSelectedCharactersStore, useSelectedPotentialsStore, useStoredBuildsStore } from "@/lib/store";
import { Button, createListCollection, Input } from "@chakra-ui/react";
import { SelectBase } from "./base/SelectBase";
import { storage } from "@/utils/local-storage-utils";
import { useState } from "react";

const saveBuild = (name: string) => {
  const selectedStore = useSelectedPotentialsStore.getState();
  const builds = storage.get("builds");

  builds.push({
    name,
    data: {
      characters: selectedStore.characters,
      main: selectedStore.main,
      sup1: selectedStore.sup1,
      sup2: selectedStore.sup2,
    },
  });

  storage.set("builds", builds);
};

const loadBuild = (name: string) => {
  const { characters } = useDataStore.getState();
  const { builds } = useStoredBuildsStore.getState();
  const { setCharacter: setCharacterData } = useSelectedCharactersStore.getState();
  const { setCharacters, setPotentials } = useSelectedPotentialsStore.getState();

  const build = builds.find((b) => b.name === name);
  if (!build) throw new Error("Could not load build data");

  setCharacters(build.data.characters);
  setPotentials("main", build.data.main);
  setPotentials("sup1", build.data.sup1);
  setPotentials("sup2", build.data.sup2);

  if (characters) {
    if (build.data.characters.main) {
      const character = characters[build.data.characters.main];
      setCharacterData("main", character);
    }
    if (build.data.characters.sup1) {
      const character = characters[build.data.characters.sup1];
      setCharacterData("sup1", character);
    }
    if (build.data.characters.sup2) {
      const character = characters[build.data.characters.sup2];
      setCharacterData("sup2", character);
    }
  }
};

export const SaveLoadControls = () => {
  const builds = useStoredBuildsStore((s) => s.builds);

  const [name, setName] = useState("");

  const buildCollection = createListCollection({
    items: builds.map((build) => ({ label: build.name, value: build.name })),
  });

  return (
    <div className="save-container">
      <SelectBase collection={buildCollection} onBuildSelect={loadBuild} />
      <Input variant="subtle" placeholder="Build name" value={name} onChange={(e) => setName(e.target.value)} />
      <Button disabled={!name.trim().length} onClick={() => saveBuild(name)}>
        Save
      </Button>
    </div>
  );
};
