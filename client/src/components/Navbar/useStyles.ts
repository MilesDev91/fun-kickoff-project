import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  navbar: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',

    '@media (min-width: 600px)': {
      marginBottom: '2rem',
    },

    '& .MuiToolbar-root': {
      backgroundColor: 'white',
      justifyContent: 'space-between',
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      '@media (min-width: 600px)': {
        minHeight: 80,
        paddingRight: theme.spacing(6),
        paddingLeft: theme.spacing(6),
      },
    },

    '& .MuiButton-root': {
      marginLeft: theme.spacing(1),
      padding: 10,
      width: 75,
      '@media (min-width: 600px)': {
        width: 100,
      },
      textTransform: 'uppercase',
    },
    '& .MuiButton-text': {
      textTransform: 'none',
      fontSize: 14,
      whiteSpace: 'nowrap',
      color: 'black',
    },
    '& .MuiAvatar-root': {
      marginLeft: theme.spacing(3),
    },
  },
  navButtonGroup: {
    flexGrow: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  navButtons: {
    marginLeft: theme.spacing(1),
    '@media (min-width: 600px)': {
      marginLeft: theme.spacing(4),
    },
  },
}));

export default useStyles;
