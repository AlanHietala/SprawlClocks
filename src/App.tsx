import React, { useState } from "react";
import { setConstantValue } from "typescript";
import "./App.css";
import ClockSection from "./ClockSection";

function App() {
  const [numClockSections, setNumClockSections] = useState(1);
  const [isEditing, setIsEditing] = useState(true);
  const clocks = Array(numClockSections).fill(1);
  return (
    <div className="App">
      {clocks.map(() => (
        <ClockSection isEditing={isEditing} />
      ))}
      {isEditing || (
        <button
          className="btn-action"
          onClick={(event) => {
            setNumClockSections(numClockSections + 1);
          }}
        >
          Add Section
        </button>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "edit" : "save"}
      </button>
    </div>
  );
}

export default App;
