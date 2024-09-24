import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function FullWidthTextField() {
  return (

    <Box sx={{ display: 'flex', justifyContent: 'start', minHeight: '100vh', gap: '10px', alignItems: 'center', flexDirection: 'column', p: 4 }}>
      <Box sx={{ width: 500, maxWidth: '100%', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <TextField fullWidth label="fullWidth" id="fullWidth" size='small' />
        <Button variant="contained" endIcon={<SendIcon />}>
          Add
        </Button>
      </Box>
    </Box>

  );
}
