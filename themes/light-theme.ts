import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: grey[100],
        },
        primary: {
            main: '#4a148c',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    components: {  //nos permite hacer los cambios de todos los elementos de material
        //siempre usar Mui al inicio
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {

            }
        }
    }
});