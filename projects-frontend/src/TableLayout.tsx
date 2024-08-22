import React from 'react';

import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import { fetchUsers } from './api/fetchUsers';
import { UsersTable } from './components/DataTable';

interface User {
  name: string
}

export default function TableLayout() {
  const [users, setUsers] = React.useState<User[] | null>(null)

  React.useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users)
    })
  },[])

  return (
    <div>
      <UsersTable users={users} />
    </div>    
  );
}