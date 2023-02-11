import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";

const columns: GridColDef[] = [
  {
    field: "index",
    headerName: "NO.",
    flex: 1,
    disableColumnMenu: true,
    disableReorder: true,
  },

  {
    field: "url",
    headerName: "WEBSITE URL",
    flex: 2,
    disableColumnMenu: true,
    disableReorder: true,
  },

  {
    field: "evalCount",
    headerName: "NO. OF EVALUATIONS",
    flex: 1,
    headerAlign: "center",
    align: "center",
    disableReorder: true,
  },

  {
    field: "timestamp",
    headerName: "SUBMITTED ON",
    flex: 1,
    headerAlign: "center",
    align: "center",
    type: "datetime",
    /*
    valueFormatter: (params: GridValueFormatterParams) => {
    // first converts to JS Date, then to locale option through date-fns
    return formatDate(params.value);
    },
    // valueGetter for filtering
    valueGetter: (params: GridValueGetterParams) => {
    return formatDate(params.value);
    }
    */
  },

  {
    field: "problemCount",
    headerName: "ACCESSBILITY ISSUES",
    type: "number",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
];

export default function DataTable() {
  const [rows, setRows] = useState(() => []);

  useEffect(() => {
    fetch(
      "https://asia-southeast1-starlit-array-328711.cloudfunctions.net/hack4good/api/assessments/NUS",
      { mode: "cors" }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        JSON.stringify(data);
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          data[i].index = i + 1;
        }
        setRows(() => data);
      });
  }, []);

  return (
    <Box sx={{ width: "80%", paddingTop: "5%" }}>
      <Button
        sx={{
          backgroundColor: "#E0E0E0",
          color: "#000000DE",
          borderRadius: "64px",
          marginBottom: "2%",
          gap: "10px",
          width: "202px",
          height: "50px",
          fontSize: "15px",
          alignSelf: "right",
        }}
        disableFocusRipple
        disableRipple
        startIcon={<AddIcon />}
      >
        NEW ASSESSMENT
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        autoHeight
        density="comfortable"
        sx={{
          backgroundColor: "white",
          boxShadow: 2,
          border: 2,
          borderColor: "white",
          "& .MuiDataGrid-cell:hover": {
            color: "white",
          },
        }}
      />
    </Box>
  );
}
