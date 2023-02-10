import * as React from 'react';
import { Typography, Divider, withStyles } from '@mui/material';


export default function Header(){
    return(
    <Typography variant="h5" gutterBottom color={"white"}>
        INCLUSION LAB QUICK & AUTOMATED ACCESSIBILITY DIAGNOSTICS 
        <Divider color="#17475f" sx={{ height: 10, width: '100%', marginTop: '1%' }} />
    </Typography>
);}