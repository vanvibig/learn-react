import React from 'react';

interface LeftProps {
  updateState: (newState: string) => void;
}

const Left: React.FC<LeftProps> = ({ updateState }) => {
  const handleChange = () => {
    updateState('state updated by Left');
  };

  return (
    <div>
      <button onClick={handleChange}>Update State</button>
    </div>
  );
};

export default Left;
