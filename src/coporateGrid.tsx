import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'NO.', flex: 1, disableColumnMenu: true},
  { field: 'url', headerName: 'WEBSITE URL', flex: 2, disableColumnMenu: true},
  { field: 'eval', headerName: 'NO. OF EVALUATIONS', flex: 1, headerAlign: 'center'},
  {
    field: 'time',
    headerName: 'SUBMITTED ON',
    type: 'number',
    flex: 1,
    headerAlign: 'center'
  },
  {
    field: 'count',
    headerName: 'ACCESSBILITY ISSUES',
    flex: 1,
    headerAlign: 'center'
  }
];

const rows = [

  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

];

export default function DataTable() {
  return (

    <Box sx={{width: '80%', paddingTop: '5%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[10]}
        autoHeight
        density = 'comfortable'
        sx={{
          backgroundColor: 'white',  
          boxShadow: 2,
          border: 2,
          borderColor: 'white',
          '& .MuiDataGrid-cell:hover': {
            color: 'white',  
          },
        }}
      />
    </Box>
  );
}