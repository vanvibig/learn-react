import Button from "@mui/material/Button";
import { useState } from "react";

const ToggleButton = () => {
  const [activated, setActivated] = useState(false);

  const handleClick = () => {
    setActivated(!activated);
  };

  return (
    <Button
      variant={activated ? "contained" : "outlined"}
      onClick={handleClick}
    >
      {activated ? "Activated" : "Default"}
    </Button>
  );
};

export default ToggleButton;
