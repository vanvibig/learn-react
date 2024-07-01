import React, { useState } from 'react';
import Left from './Left';
import Right from './Right';

const ParentComponent: React.FC = () => {
  const [sharedState, setSharedState] = useState<string>('initial state');

  const updateState = (newState: string) => {
    setSharedState(newState);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h1>Child1</h1>
        <Left updateState={updateState} />
      </div>
      <div style={{ flex: 1 }}>
        <h1>Child2</h1>
        <Right sharedState={sharedState} />
      </div>
    </div>
  );
};

export default ParentComponent;
