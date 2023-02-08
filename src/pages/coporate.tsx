import * as React from 'react';
import { Box, Stack, Typography, Divider, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DataTable from '../coporateGrid'
import FullWidthTextField from '@/autoTest';

const callAPI = async () => {
	try {
		const res = await fetch(`http://localhost:3000/api/hello`);
		const data = await res.json();
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};

export default function Diagnostic() {
  return (
    <Box sx={{height:'100vh', background: 'white'}}>
      <Stack spacing={10}>
    <Box display='flex' flex='1' justifyContent='space-around' height= '60vh' sx={{
        backgroundColor: 'white', }}>
        <DataTable/>
    </Box>
      <Box display='flex' flex='1' justifyContent='center' 
      sx={{backgroundColor: '#fff', paddingX: '8%'}}>
        <Box display='flex' flex='1' justifyContent='center' 
        sx={{backgroundColor: '#17475F', paddingX: '8%', paddingY: '3%', borderRadius: '20px'}}>
          <Stack width={'100%'} alignItems='center' spacing={5}>
          <Typography variant="h5" gutterBottom>
          INCLUSION LAB QUICK & AUTOMATED ACCESSIBILITY DIAGNOSTICS 
          <Divider color="#fff" sx={{ height: 10, width: '100%', marginTop: '1%' }} />
          </Typography>
          <FullWidthTextField/>
          <Button onClick={callAPI} variant="contained" startIcon={<AddIcon/>} sx={{backgroundColor: "white", color: "#000000DE", borderRadius: "15px"}}>
            Test Website
          </Button>
          </Stack>
        </Box>
        </Box>
      </Stack>
      
    </Box>
  );
}