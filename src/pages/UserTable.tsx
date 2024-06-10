// src/pages/Home.tsx
import React from 'react';
import { MaterialReactTable } from 'material-react-table'; // Import the specific component from the library
import { useQuery } from '@tanstack/react-query';

const UserTable: React.FC = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['get-users'],
        queryFn: () =>
            fetch('/api/user').then((res) =>
                res.json(),
            ),
    })

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred</div>;

    return (
        <MaterialReactTable
            columns={[
                { header: 'ID', accessorKey: 'id' },
                { header: 'First Name', accessorKey: 'firstName' },
                { header: 'Last Name', accessorKey: 'lastName' },
            ]}
            data={[data]}
        />
    );
};

export default UserTable;
