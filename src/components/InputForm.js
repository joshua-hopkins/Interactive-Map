import React, { useState } from "react";
import Address from "./Geocode";

const InputForm = props => {
  const [startCord, setStartCord] = useState("");
  const [endCord, setEndCord] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Finding the coordinates for ${startCord} and ${endCord}.`);
    Address(startCord, endCord);
  };
  return (
    // Needs form validation and error checking
    <form className="InputForm" onSubmit={handleSubmit}>
      <div class="field">
        <label class="label">Starting Point</label>
        <div class="control">
          <input
            class="input"
            type="text"
            value={startCord}
            placeholder="Starting Point"
            onChange={e => setStartCord(e.target.value)}
          />
        </div>
      </div>
      <div class="field">
        <label class="label">End Point</label>
        <div class="control">
          <input
            class="input"
            type="text"
            value={endCord}
            placeholder="End Point"
            onChange={e => setEndCord(e.target.value)}
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="button is-info" type="submit" value={"Submit"} />
        </div>
      </div>
    </form>
  );
};

export default InputForm;
