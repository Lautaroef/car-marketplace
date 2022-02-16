import React from 'react';
import history from 'history/browser';
// Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function index() {
  return (
    <Box as={'section'} sx={{ textAlign: 'center', mt: '2rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>
        Oh no, this page does not exists.
      </h1>
      <Button
        variant='contained'
        sx={{ backgroundColor: '#075aff' }}
        onClick={() => history.back()}
      >
        Back to previous page
      </Button>
    </Box>
  );
}

export default index;
