import * as React from 'react';
import { Box, Stack, Typography, Button, Modal, IconButton, Grid, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DataTable from './coporateGrid'
import Header from './header';
import FullWidthTextField from '@/pages/coporate/autoTest';
import { useState } from 'react';

export default function Diagnostic() {

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const callAPI = async () => {
    
    setOpen(true);
    try {
      setIsLoading(false);
      const res = await fetch(`http://localhost:3000/api/hello`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = ()  => {
    setOpen(false);
  }


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
          <Header/>
          <FullWidthTextField/>
          <Button onClick={callAPI} startIcon={<AddIcon/>} 
            sx={{backgroundColor: "white", 
            color: "#000000DE", 
            borderRadius: "15px", 
            width: '171px', 
            height: '50px', 
            fontSize: '15px'}}
            disableFocusRipple
            disableRipple
            >
            Test Website
          </Button>
          </Stack>
        </Box>
        </Box>
      </Stack>

      {/* Pop up modal for automatic diagnostic*/}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          height: '80vh',
          bgcolor: 'background.paper',
          border: '1px solid #000',
          boxShadow: 24,
          p: 4}}>
          <IconButton onClick={handleClose}>
            <CloseIcon/>
          </IconButton>
          {isLoading?
          <Box sx={{ display: 'flex',position: 'fixed', /* or absolute */
          top: '40%',
          left: '47%' }}>
            <CircularProgress size={'5rem'}/>
          </Box> :
          /* Load result when done */
          <Box justifyItems={"center"} sx={{width: '100%', paddingTop: '5%', paddingLeft: '2%'}}>
          <Grid container>
            <Grid xs={6}>
              <Typography id="modal-modal-title" variant="h4" component="h4" sx={{color: 'black'}}>
                URL Analysed: https://www.google.com
              </Typography>
              <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2, color: 'black', paddingTop: '3%' }}>
                There are a total of <Typography variant='h4' color={"red"}>20</Typography> issues with your website
              </Typography>
            </Grid>
            <Grid xs={6}>
              <Stack alignItems={'center'} spacing ={2}>
                <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2, color: 'black', paddingTop: '3%' }}>
                  Automatic Testing can only discover so many issues. Get a new assessment to have your website manually accessed for a full report
                </Typography>
                <Box display={'flex'} flex={3} justifyContent={'center'} sx={{paddingTop: '5%'}}>
                <Grid display={'flex'} spacing={3}>
                    <Button startIcon ={<AddIcon/>} 
                      sx={{backgroundColor: "#E0E0E0", 
                      color: "#000000DE", 
                      borderRadius: "15px", 
                      marginBottom: '2%', 
                      gap: '10px'}}>
                        New Assesment
                    </Button>
                </Grid>
                </Box>
              </Stack>
            </Grid>
          </Grid>
          </Box>}
        </Box>
      </Modal> 
    </Box>
  );
}