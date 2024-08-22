import React from 'react'
import { IconBuilding, IconChevronRight, IconUser } from '@tabler/icons-react';

import { showNotification } from '@mantine/notifications';
import { DataTable } from 'mantine-datatable';
import { UserProjectTable } from './UserProjectTable';

export function UsersTable({ users }: { users:any }) {
  return (
    <DataTable
      withTableBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      // provide data
      records={users}
      rowExpansion={{
        content: (user) => <UserProjectTable user={user} />
      }}
      // define columns
      columns={[
        {
          accessor: 'id',
          // this column has a custom title
          title: '#',
          // right-align column
          textAlign: 'right',
        },
        { accessor: 'name',
        render: ({ id, name }) => (
          <>
            <IconChevronRight />
            <IconUser style={{
              width: '20px',
              height: '20px',
              marginRight: '10px'
            }} />
            <span>{name}</span>
          </>
        ), },
        { accessor: 'email' },

      ]}
      // execute this callback when a row is clicked
      onRowClick={({ record: { name } }) =>
        showNotification({
          title: `Clicked on ${name}`,
          message: `You clicked on ${name}`,
          withBorder: true,
        })
      }
    />
  );
}
