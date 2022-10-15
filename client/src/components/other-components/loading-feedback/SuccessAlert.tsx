import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

type Props = {
  isSuccess: boolean;
  children: React.ReactNode;
};

function SuccessAlert({ isSuccess, children }: Props) {
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
