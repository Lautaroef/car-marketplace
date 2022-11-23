import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

type Props = {
  isError: boolean;
  children: React.ReactNode;
};

function ErrorAlert({ isError, children }: Props) {
  return (
    <div>
      {isError && (
        <Snackbar
          open={isError}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <MuiAlert
            elevation={6}
            variant='filled'
            severity='error'
            sx={{ width: '100%' }}
          >
            {children}
          </MuiAlert>
        </Snackbar>
      )}
    </div>
  );
}

export default ErrorAlert;
