import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Index() {
  const router = useRouter();
  return (
    <Box component={'section'} sx={{ textAlign: 'center', mt: '2rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>Oh no, this page does not exists.</h1>
      <Button
        variant='contained'
        sx={{ backgroundColor: '#075aff' }}
        onClick={() => router?.back()}
      >
        Back to previous page
      </Button>
    </Box>
  );
}

export default Index;
