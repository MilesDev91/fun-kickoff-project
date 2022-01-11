import { Paper, Link, Grid } from '@mui/material';
import useStyles from '../ProfileSettings/useStyles';
import { NavLink, Switch, Route } from 'react-router-dom';
import EditProfile from './EditProfile/EditProfile';
import EditProfilePhoto from './EditProfilePhoto/EditProfilePhoto';
import Payment from './Payment/Payment';
import SecuritySettings from './SecuritySettings/SecuritySettings';
import Settings from './Settings/Settings';

export default function ProfileSettings(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.sidebar} item xs={4} md={3}>
        <Link underline="none" component={NavLink} to="/profile-settings/edit-profile">
          Edit Profile
        </Link>
        <Link underline="none" component={NavLink} to="/profile-settings/edit-profile-photo">
          Profile Photo
        </Link>
        <Link underline="none" component={NavLink} to="/profile-settings/payment">
          Payment
        </Link>
        <Link underline="none" component={NavLink} to="/profile-settings/security">
          Security
        </Link>
        <Link underline="none" component={NavLink} to="/profile-settings/settings">
          Settings
        </Link>
      </Grid>
      <Grid component={Paper} item xs={8} md={6} elevation={4} className={classes.editSettings}>
        <Switch>
          <Route path="/profile-settings/edit-profile" component={EditProfile} />
          <Route path="/profile-settings/edit-profile-photo" component={EditProfilePhoto} />
          <Route path="/profile-settings/payment" component={Payment} />
          <Route path="/profile-settings/security" component={SecuritySettings} />
          <Route path="/profile-settings/settings" component={Settings} />
        </Switch>
      </Grid>
    </Grid>
  );
}
