import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

type Props = {
  step: HowItWorksStep;
};

function SingleCard({ step }: Props) {
  const { src, title, info, borderRadius, width } = step;
  return (
    <Card>
      <picture>
        <CardMedia
          component='img'
          image={src}
          alt={title}
          style={{
            borderRadius: borderRadius || '50px',
            width: width || '150px',
          }}
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
