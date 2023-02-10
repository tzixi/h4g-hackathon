import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, TablePagination } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';
  

function createData(
  index: number,
  url: string,
  evalCount: number,
  time: string,
  problemCount: number,
) {
  return {
    index,
    url,
    evalCount,
    time,
    problemCount,
    info: [
      {
        name: 'jon doe',
        disability: 'idk',
        feedback: 'lol',
      },
      {
        name: 'jon doe',
        disability: 'idk',
        feedback: 'lol',
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  var fontCol = (row.problemCount) == 0 ? "green" : ((row.problemCount >= 10) ? "red" : "orange")

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.url}
        </TableCell>
        <TableCell align="center">{row.evalCount}</TableCell>
        <TableCell align="center">{row.time}</TableCell>
        <TableCell align="center" 
        style={{color: fontCol}}>
        {row.problemCount}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Assesment Information
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Assesor Name</TableCell>
                    <TableCell align="center">Assessor Disability</TableCell>
                    <TableCell align="center">Assesor Remarks</TableCell>
                    <TableCell align="center">Feedback</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.info.map((infoRow) => (
                    <TableRow key={infoRow.name}>
                      <TableCell align="center" component="th" scope="row">
                        {infoRow.name}
                      </TableCell>
                      <TableCell align="center">{infoRow.disability}</TableCell>
                      <TableCell align="center">{infoRow.feedback}</TableCell>
                      <TableCell align="center">
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

interface GridProps {
  stateChanger: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CollapsibleTable({stateChanger}: GridProps) {
  var [rows, setRows] = React.useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    fetch(
      "https://asia-southeast1-starlit-array-328711.cloudfunctions.net/hack4good/api/assessments/visa",
      { mode: "cors" }
    ).then(response => {
      return response.json();
    }).then(data => {
      JSON.stringify(data);
      for (var i = 0; i < data.length; i++){
        data[i].index = i + 1;
        data[i].time = new Date(parseInt(data[i].timestamp)).toLocaleString();
        data[i].info = [
          {
            name: 'jon doe',
            disability: 'idk',
            feedback: 'lol',
          },
          {
            name: 'jon doe',
            disability: 'idk',
            feedback: 'lol',
          },
        ]
        console.log(data[i].timestamp);
      }
      console.log(data);
      
      setRows(() => data);
    })  
}, []);

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };


  return (
    <Box sx={{width: '80%', paddingTop: '5%'}}>
      <Button sx={{backgroundColor: "#E0E0E0", 
      color: "#000000DE", 
      borderRadius: "64px", 
      marginBottom: '2%', 
      gap: '10px', 
      width: '202px', height: '50px', fontSize: '15px', alignSelf: 'right'}} 
        disableFocusRipple
        disableRipple
        startIcon={<AddIcon/>}
        onClick = {() => {
          stateChanger(true);
        }}>
            NEW ASSESSMENT
        </Button>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>WEBSITE URL</TableCell>
            <TableCell align="center">NO. OF EVALUATIONS</TableCell>
            <TableCell align="center">SUBMITTED ON</TableCell>
            <TableCell align="center">ACCESSIBILITY ISSUES</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component={Paper}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );}
          
