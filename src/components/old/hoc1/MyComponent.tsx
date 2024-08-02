import React from "react";

// Define the props for the component
interface MyComponentProps {
  message: string;
}

// Create a simple component
const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default MyComponent;