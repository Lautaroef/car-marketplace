import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';

type Props = {
  step: HowItWorksStep;
};

function SingleStep({ step }: Props) {
  const { img, title, info, borderRadius } = step;
  return (
    <Card>
      <picture>
        <Image
          fill
          src={img}
          alt={title}
          style={{
            borderRadius: borderRadius || '50px',
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

export default SingleStep;
