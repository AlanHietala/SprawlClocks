import React, { useState } from "react";

const isTime = () => {};

const Clock = ({ isEditing }: { isEditing: boolean }) => {
  const [clockTime, setClockTime] = useState(0);
  const [clockName, setClockName] = useState("My Clock");
  const passed15 = clockTime >= 1 ? "passed" : "";
  const passed18 = clockTime >= 2 ? "passed" : "";
  const passed21 = clockTime >= 3 ? "passed" : "";
  const passed22 = clockTime >= 4 ? "passed" : "";
  const passed23 = clockTime >= 5 ? "passed" : "";
  const passed00 = clockTime >= 6 ? "passed" : "";
  return (
    <div className="clock">
      <div className="clock-name">
        {!isEditing || clockName}
        {isEditing || (
          <input
            type="text"
            value={clockName}
            onChange={(event) => setClockName(event.target.value)}
          ></input>
        )}
      </div>
      <button
        className={"segment hour3 " + passed15}
        onClick={() => setClockTime(1)}
      >
        15:00
      </button>
      <button
        className={"segment hour3 " + passed18}
        onClick={() => setClockTime(2)}
      >
        18:00
      </button>
      <button
        className={"segment hour3 " + passed21}
        onClick={() => setClockTime(3)}
      >
        21:00
      </button>
      <button
        className={"segment hour1 " + passed22}
        onClick={() => setClockTime(4)}
      >
        22:00
      </button>
      <button
        className={"segment hour1 " + passed23}
        onClick={() => setClockTime(5)}
      >
        23:00
      </button>
      <button
        className={"segment hour1 " + passed00}
        onClick={() => setClockTime(6)}
      >
        00:00
      </button>
      <button className="clear" onClick={() => setClockTime(0)}>
        Clear
      </button>
    </div>
  );
};

export default Clock;
