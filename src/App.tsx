import React { useState } from "react";
import Gentleman from "./Gentleman";

const gentlemenData = [
  {
    id: 1,
    name: "Bertin Osborne",
    status: "Alive",
    profession: "Youtuber",
    twitter: "@osbourne",
    picture: "bertin.jpg",
    alternativeText: "Osbourne pointing at you",
    selected: true,
  },
  {
    name: "The Farytale",
    status: "RIP",
    profession: "Influencer",
    twitter: "pending",
    picture: "fary.jpg",
    alternativeText: "The Fary pointing at you",
    id: 2,
    selected: false,
  },
  {
    id: 3,
    name: "Julius Churchs",
    status: "Alive",
    profession: "Java developer",
    twitter: "@julius_churchs",
    picture: "julio.jpg",
    alternativeText: "Churchs pointing at you",
    selected: true,
  },
];

function App() {
  const [gentlemen, setGentlemen] = useState(gentlemenData);

  const handleSelectAll = () => {
    const updatedGentlemen = gentlemen.map((gentleman) => ({
      ...gentleman,
      selected: true,
    }));
    setGentlemen(updatedGentlemen);
  };

  return (
    <div className="container">
      <div className="main">
        <div className="main-header">
          <h1 className="main-title">Gentlemen Collection</h1>
          <Button onClick={handleSelectAll}>Select All</Button>
        </div>
        <div className="gentlemen-list">
          {gentlemen.map((gentleman) => (
            <Gentleman key={gentleman.id} gentleman={gentleman} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
