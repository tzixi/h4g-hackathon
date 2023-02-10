import Button from "@mui/material/Button";
import { DataGrid, GridColDef, GridApi, GridCellValue } from "@mui/x-data-grid";
import { useState, useEffect } from 'react';

const columns: GridColDef[] = [
  {
    field: "action",
    headerName: "Assess Website",
    width: 120,
    sortable: false,
    renderCell: (params: any) => {
      const onClick = (e: any) => {
        e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, any> = {};

        api
          .getAllColumns()
          .filter((c: any) => c.field !== "__check__" && !!c)
          .forEach(
            (c: any) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return <Button onClick={onClick}>Click</Button>;
    },
  },
  { field: "id", headerName: "ID", width: 70 },
  { field: "url", headerName: "Website", width: 300 },
  { field: "companyName", headerName: "Company", width: 800 },
];

export default function DataGridDemo() {

  const [rows, setRows] = useState(() => []);

  useEffect(() => {
      fetch(
        "https://asia-southeast1-starlit-array-328711.cloudfunctions.net/hack4good/api/assessments/visa",
        { mode: "cors" }
      ).then(response => {
        return response.json();
      }).then(data => {
        JSON.stringify(data);
        console.log(data);
        setRows(() => data);
      })  
  }, []);

  return (

    <div
      style={{
        height: 400,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
