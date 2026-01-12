import { useEffect, useState } from "react";
import { PotentialsContainer } from "./components/PotentialsContainer";
import { fetchCharacters, fetchPotentials } from "./utils/data-utils";
import "./App.css";
import { useDataStore } from "./lib/store";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const dataStore = useDataStore.getState(); // Store snapshot

    fetchCharacters().then((characters) => {
      dataStore.setCharacters(characters);
    });
    fetchPotentials().then((potentials) => {
      dataStore.setPotentials(potentials);
    });
  }, []);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="main-wrapper">
        <PotentialsContainer category="main" />
        <PotentialsContainer category="sup1" />
        <PotentialsContainer category="sup2" />
      </div>
    </>
  );
}

export default App;
