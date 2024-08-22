import React from 'react';
import ReactDOM from 'react-dom';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import TableLayout from './TableLayout';


export default function RootLayout() {

  return (
    <div>
      <TableLayout />
    </div>    
  );
}

ReactDOM.render(<MantineProvider defaultColorScheme="auto">
  <RootLayout />
</MantineProvider>
, document.getElementById('app'))
