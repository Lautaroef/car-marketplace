import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function SuccessAlert({ isSuccess, children }) {
  return (
    <div>
      {isSuccess && (
        <Snackbar
          open={isSuccess}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <MuiAlert
            elevation={6}
            variant='filled'
            severity='success'
            sx={{ width: '100%' }}
          >
            {children}
          </MuiAlert>
        </Snackbar>
      )}
    </div>
  );
}

export default SuccessAlert;
