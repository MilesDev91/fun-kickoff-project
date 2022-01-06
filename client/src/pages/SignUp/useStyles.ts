import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    justifyContent: 'center',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    '& .MuiTypography-root': {
      fontWeight: 700,
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 23,
  },
  welcome: {
    textAlign: 'center',
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
  },
}));

export default useStyles;
