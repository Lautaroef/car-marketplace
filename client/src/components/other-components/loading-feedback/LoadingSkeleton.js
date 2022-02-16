import React from 'react';
import Skeleton from '@mui/material/Skeleton';

function LoadingSkeleton() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        rowGap: 6,
      }}
    >
      <Skeleton variant='text' sx={{ mt: 1, width: '120px' }} />
      <Skeleton variant='text' sx={{ mt: -0.25, width: '150px' }} />
      <Skeleton
        variant='rectangular'
        height={225}
        sx={{ mb: '0.5rem', mt: 1 }}
      />
      <Skeleton variant='rectangular' height={225} sx={{ mb: '0.5rem' }} />
    </div>
  );
}

export default LoadingSkeleton;
