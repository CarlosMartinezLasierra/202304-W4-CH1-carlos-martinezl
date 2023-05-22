import React from "react";
import { Button } from "../Button/Button";
import { Info } from "../Info/Info";
import "./App.css";

function App() {
  return (
    <>
      <body>
        <div className="container">
          <header className="main-header">
            <h1 className="main-title">The pointing gentlemen</h1>
          </header>
          <Button></Button>
          <Info></Info>
        </div>
      </body>
    </>
  );
}

export default App;
