import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4),
    '& a': {
      color: 'rgba(0,0,0,0.4)',
      padding: theme.spacing(1.5),
    },
    '& .active': {
      color: 'black',
      fontWeight: 'bold',
    },
    '@media(min-width: 600px)': {
      padding: theme.spacing(12),
      paddingLeft: theme.spacing(18),
    },
    '& .MuiGrid-item': {
      flexDirection: 'column',
    },
  },
  editSettings: {
    padding: theme.spacing(2),
  },
  sidebar: {
    display: 'flex',
  },
}));

export default useStyles;
