// UserTable.tsx
import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import { User } from '../entities/User';

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const columns = React.useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
      },
      {
        header: 'Name',
        accessorKey: 'name',
      },
      {
        header: 'Email',
        accessorKey: 'email',
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={users}
      enableSorting
      enablePagination
      enableRowSelection
    />
  );
};

export default UserTable;
