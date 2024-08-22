import React from 'react'

import { showNotification } from '@mantine/notifications';
import { DataTable } from 'mantine-datatable';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchUserProject } from '../api/fetchUserProject';

export function UserProjectTable({ user }: { user: any }) {
  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    if (user.record && user.record.id) {
      fetchUserProject(user.record.id).then((userProjects) => {
        setUserProjects(userProjects.projects);
      })
    }
  }, [user])

  return (
    <DataTable
      withTableBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      // provide data
      records={userProjects}
      // define columns
      columns={[{
        accessor: 'project_id',
        // this column has a custom title
        title: '#'
      },
      {
        accessor: 'progress',
      },
      { accessor: 'options.color' },
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
