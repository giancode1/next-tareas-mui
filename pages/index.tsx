import { Button, Typography } from '@mui/material';
import type { NextPage } from 'next'

type HomeProps = {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

const HomePage: NextPage = (props: HomeProps) => {
  return (
    <>
      <h1>Hola mundo</h1>
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

    <Typography 
      variant="h3"
      color="primary"
    >
      Hola mundo
    </Typography>
    </>
  )
}

export default HomePage;
