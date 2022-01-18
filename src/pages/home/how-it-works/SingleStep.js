import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function SingleCard({ src, title, info, borderRadius }) {
  return (
    <Card>
      <picture>
        <CardMedia
          component='img'
          image={src}
          alt={title}
          style={{ borderRadius: borderRadius || '50px' }}
        />
      </picture>
      <CardContent>
        <h3>{title}</h3>
        <Typography variant='body2' color='text.secondary'>
          {info}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SingleCard;
