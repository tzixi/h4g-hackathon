import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
  return (
        <Box
        sx={{
            width: '80%',
            maxWidth: '80%',
            background: 'white',
            borderRadius: '15px'
        }}
        >
        <TextField fullWidth variant="filled" label="Enter URL here" id="fullWidth" sx={{borderRadius: '1px'}} />
        </Box>
  );
}