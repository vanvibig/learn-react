// src/components/MainComponent.tsx

import React from "react";
import Button from "@mui/material/Button";

export interface MainComponentProps {
  toggleSideComponent: () => void;
}

const MainComponent: React.FC<MainComponentProps> = ({
  toggleSideComponent,
}) => {
  return (
    <div>
      <h1>Main Component</h1>
      <Button variant="contained" onClick={toggleSideComponent}>
        Show Right Side
      </Button>
    </div>
  );
};

export default MainComponent;
