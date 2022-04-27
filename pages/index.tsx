import { Button } from '@mui/material';
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
    </>
  )
}

export default HomePage;
