import { Button, Typography } from '@mui/material';
import type { NextPage } from 'next'
import { Layout } from '../components/layouts';

type HomeProps = {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

const HomePage: NextPage = (props: HomeProps) => {
  return (
    <Layout title='Inicio GC'>
      <Typography variant='h1' color='primary'>Hola mundo</Typography>
      <Button 
        variant="outlined"
        onClick={props.toggleTheme}
      >
      Toggle Theme
      </Button>

      <Button 
        variant='contained'
        color="primary"
      >
        primary
      </Button>

      <Button
        variant='contained' 
        color="secondary"
      >
        secondary
      </Button>

      <Button
        variant='contained' 
        color="error"
      >
        error
      </Button>


    </Layout>
  )
}

export default HomePage;
