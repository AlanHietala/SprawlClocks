import React, { useState } from "react";
import Clock from "./Clock";

function ClockSection({ isEditing }: { isEditing: boolean }) {
  const [numClocks, setNumClocks] = useState(1);
  const [sectionName, setSectionName] = useState("My Section");
  const clocks = Array(numClocks).fill(1);
  return (
    <div className="clock-section">
      <div>
        <div className="clock-section-name">
          {!isEditing && sectionName}
          {isEditing && (
            <input
              value={sectionName}
              onChange={(event) => setSectionName(event.target.value)}
            />
          )}
        </div>
      </div>
      {clocks.map(() => (
        <Clock isEditing={isEditing} />
      ))}
      {isEditing && (
        <button
          className="clear add-section"
          onClick={(event) => {
            setNumClocks(numClocks + 1);
          }}
        >
          Add Clock
        </button>
      )}
    </div>
  );
}

export default ClockSection;
