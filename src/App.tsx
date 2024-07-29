// App.tsx
import React from 'react';
import UserTable from './components/UserTable';
import { User } from './entities/User';
import { Container } from '@mui/material';

const App: React.FC = () => {
  const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    // Add more user data here
  ];

  return (
    <Container>
      <h1>User List</h1>
      <UserTable users={users} />
    </Container>
  );
};

export default App;
