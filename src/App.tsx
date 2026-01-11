import { useEffect, useState } from "react";
import { PotentialsContainer } from "./components/PotentialsContainer";
import { fetchCharacters, fetchPotentials } from "./utils/data-utils";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [characters, setCharacters] = useState(null);
  const [potentials, setPotentials] = useState(null);

  useEffect(() => {
    fetchCharacters().then((characters) => {
      setCharacters(characters);
    });
    fetchPotentials().then((potentials) => {
      setPotentials(potentials);
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
        <PotentialsContainer />
        <PotentialsContainer />
        <PotentialsContainer />
      </div>
    </>
  );
}

export default App;
