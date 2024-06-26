// src/components/withSideComponent.tsx

import React, { useState } from "react";
import { MainComponentProps } from "./MainComponent";

interface WithSideComponentProps {
  MainComponent: React.FC<MainComponentProps>;
  SideComponent: React.FC;
}

const withSideComponent = ({
  MainComponent,
  SideComponent,
}: WithSideComponentProps) => {
  return () => {
    const [showSide, setShowSide] = useState(false);

    const toggleSideComponent = () => {
      setShowSide(!showSide);
    };

    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <MainComponent toggleSideComponent={toggleSideComponent} />
        </div>
        {showSide && (
          <div style={{ flex: 0.3 }}>
            <SideComponent />
          </div>
        )}
      </div>
    );
  };
};

export default withSideComponent;
