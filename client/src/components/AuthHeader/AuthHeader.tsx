import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as LinkComponent } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  asideText: string;
  linkText: string;
}

const AuthFooter = ({ linkTo, asideText, linkText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={1} display="flex" justifyContent="center" className={classes.authHeader}>
      <Typography className={classes.accAside}>{asideText}&nbsp;</Typography>
      <Link component={LinkComponent} to={linkTo} color="primary" className={classes.accLink}>
        {linkText}
      </Link>
    </Box>
  );
};

export default AuthFooter;
