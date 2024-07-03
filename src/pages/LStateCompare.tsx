import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { isEqual } from "lodash";

interface StateType {
  field1: string;
  field2: number;
}

const initialState: StateType = {
  field1: "",
  field2: 0,
};

const LStateCompare: React.FC = () => {
  const [state, setState] = useState<StateType>(initialState);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Check if the current state differs from the initial state using Lodash isEqual
    const stateChanged = !isEqual(state, initialState);
    console.log(state);
    console.log(initialState);

    setIsButtonDisabled(!stateChanged);
  }, [state]);

  const handleInputChange = (name: string, value: unknown) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        type="text"
        name="field1"
        value={state.field1}
        onChange={(e) => handleInputChange("field1", e.target.value)}
      />
      <input
        type="number"
        name="field2"
        value={state.field2}
        onChange={(e) => handleInputChange("field2", parseInt(e.target.value))}
      />
      <Button variant="contained" disabled={isButtonDisabled}>
        Submit
      </Button>
    </div>
  );
};

export default LStateCompare;
