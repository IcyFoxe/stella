import { useEffect, useState } from "react";
import { PotentialsContainer } from "./components/PotentialsContainer";
import { fetchCharacters, fetchPotentials } from "./utils/data-utils";
import "./App.css";
import { useDataStore, useSelectedCharactersStore, useSelectedPotentialsStore, useStoredBuildsStore } from "./lib/store";
import { Button, createListCollection, Input } from "@chakra-ui/react";
import { SelectBase } from "./components/base/SelectBase";
import { storage } from "./utils/local-storage-utils";

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
  const { setCharacter } = useSelectedPotentialsStore.getState();

  const build = builds.find((b) => b.name === name);
  console.log("build:", build);
  if (!build) throw new Error("Could not load build data");

  setCharacter("main", build.data.main);
  setCharacter("sup1", build.data.sup1);
  setCharacter("sup2", build.data.sup2);

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

function App() {
  const selectedStore = useSelectedPotentialsStore();
  const storedBuildsStore = useStoredBuildsStore();

  const [name, setName] = useState("");

  useEffect(() => {
    const dataStore = useDataStore.getState(); // Store snapshot
    const storedBuildsStore = useStoredBuildsStore.getState();

    fetchCharacters().then((characters) => {
      dataStore.setCharacters(characters);
    });
    fetchPotentials().then((potentials) => {
      dataStore.setPotentials(potentials);
    });

    // Load local storage builds
    const builds = storage.get("builds");
    storedBuildsStore.setBuilds(builds);
  }, []);

  const buildCollection = createListCollection({
    items: storedBuildsStore.builds.map((build) => ({ label: build.name, value: build.name })),
  });

  return (
    <>
      <div className="save-container">
        <SelectBase collection={buildCollection} onBuildSelect={loadBuild} />
        <Input variant="subtle" placeholder="Build name" value={name} onChange={(e) => setName(e.target.value)} />
        <Button disabled={!name.trim().length} onClick={() => saveBuild(name)}>
          Save
        </Button>
      </div>

      <div className="main-wrapper">
        <PotentialsContainer category="main" />
        <PotentialsContainer category="sup1" />
        <PotentialsContainer category="sup2" />
      </div>

      <pre>{JSON.stringify(selectedStore.main)}</pre>
      <pre>{JSON.stringify(selectedStore.sup1)}</pre>
      <pre>{JSON.stringify(selectedStore.sup2)}</pre>
    </>
  );
}

export default App;
