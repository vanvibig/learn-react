import React, { useState } from "react";
import Button from "@mui/material/Button";

const MButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <Button variant="contained" color="primary" autoFocus>
        Default Button
      </Button>
      <Button
        variant="contained"
        color={isActive ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isActive ? "Active Button" : "Inactive Button"}
      </Button>
    </div>
  );
};

export default MButton;
