import * as React from 'react';
import { Typography, Divider } from '@mui/material';

export default function Header(){
    return(
    <Typography variant="h5" gutterBottom>
        INCLUSION LAB QUICK & AUTOMATED ACCESSIBILITY DIAGNOSTICS 
        <Divider color="#fff" sx={{ height: 10, width: '100%', marginTop: '1%' }} />
    </Typography>
);}