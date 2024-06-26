import { ComponentType } from "react";

// Define the props for the HOC
interface WithLoadingProps {
  isLoading: boolean;
}

// Define the HOC
const withLoading = <P extends object>(WrappedComponent: ComponentType<P>) => {
  // Return a new component
  return (props: P & WithLoadingProps) => {
    const { isLoading, ...otherProps } = props;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...(otherProps as P)} />;
  };
};

export default withLoading;
