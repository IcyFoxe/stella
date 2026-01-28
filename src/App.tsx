import { useEffect } from "react";
import { PotentialsContainer } from "./components/PotentialsContainer";
import { fetchCharacters, fetchPotentials } from "./utils/data-utils";
import "./App.css";
import { useDataStore, useStoredBuildsStore } from "./lib/store";
import { storage } from "./utils/local-storage-utils";
import { SaveLoadControls } from "./components/SaveLoadControls";

function App() {
  // const selectedStore = useSelectedPotentialsStore();

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

  return (
    <>
      <h1 className="main-title">Stella Sora Record Builder</h1>
      <SaveLoadControls />

      <div className="main-wrapper">
        <PotentialsContainer category="main" />
        <PotentialsContainer category="sup1" />
        <PotentialsContainer category="sup2" />
      </div>

      {/* <div style={{ marginTop: "20px" }}>
        <pre>{JSON.stringify(selectedStore.characters)}</pre>
        <pre>{JSON.stringify(selectedStore.main)}</pre>
        <pre>{JSON.stringify(selectedStore.sup1)}</pre>
        <pre>{JSON.stringify(selectedStore.sup2)}</pre>
      </div> */}
    </>
  );
}

export default App;
