import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Arial", "Open Sans", "sans-serif"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  palette: {
    primary: { main: '#f14140' },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 6,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#f14140',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&::before': {
            border: '1px solid rgba(0,0,0,0.2)',
            height: '100%',
            borderRadius: '.2rem',
          },
        },
      },
    },
  },
});
