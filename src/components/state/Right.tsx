import React, { useEffect } from 'react';

interface RightProps {
    sharedState: string;
}

const Right: React.FC<RightProps> = ({ sharedState }) => {
    useEffect(() => {
        console.log('Shared state has changed:', sharedState);
        // Perform any other operations when the shared state changes
    }, [sharedState]);

    return (
        <div>
            <p>Shared State: {sharedState}</p>
        </div>
    );
};

export default Right;
