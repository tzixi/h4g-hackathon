import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const columns: GridColDef[] = [
  { field: 'id', 
    headerName: 'NO.', 
    flex: 1, 
    disableColumnMenu: true, 
    disableReorder: true},

  { field: 'url', 
    headerName: 'WEBSITE URL', 
    flex: 2, 
    disableColumnMenu: true, 
    disableReorder: true},

  { field: 'eval', 
    headerName: 'NO. OF EVALUATIONS', 
    flex: 1, 
    headerAlign: 'center', 
    align: 'center', 
    disableReorder: true},

  {
    field: 'time',
    headerName: 'SUBMITTED ON',
    flex: 1,
    headerAlign: 'center',
    align: 'center'
  },

  {
    field: 'count',
    headerName: 'ACCESSBILITY ISSUES',
    type: 'number',
    flex: 1,
    headerAlign: 'center',
    align: 'center'
  }
];

const rows = [

  { id: 1, url: 'https://google.com', eval: '10', time: "8/2/2023 08:00" , count: 13 },

];

export default function DataTable() {
  return (

    <Box sx={{width: '80%', paddingTop: '5%'}}>
      <Button sx={{backgroundColor: "#E0E0E0", color: "#000000DE", borderRadius: "15px", marginBottom: '2%', gap: '10px'}} 
        disableFocusRipple
        disableRipple
        startIcon={<AddIcon/>}>
            NEW ASSESSMNENT
        </Button>      
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
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