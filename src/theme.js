import { createTheme } from '@mui/material/styles';
import purple from '@mui/material/colors/purple';
import amber from '@mui/material/colors/amber';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple.A700,
    },
    secondary: {
      main: amber[900],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1.5rem',
          color: 'pink',
        },
      },
    },
  },
});

export default theme;
