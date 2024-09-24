import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Input() {
   return (
      <Box sx={{ width: 500, maxWidth: '100%' }}>
         <TextField fullWidth label="fullWidth" id="fullWidth" />
      </Box>
   );
}


export default Input