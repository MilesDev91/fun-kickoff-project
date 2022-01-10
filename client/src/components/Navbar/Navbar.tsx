import React, { useState } from 'react';
import { useAuth } from '../../context/useAuthContext';
import {
  Button,
  Link,
  AppBar,
  Toolbar,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { Link as LinkComponent } from 'react-router-dom';
import { Person as ProfileIcon, Logout as LogoutIcon, Settings as SettingsIcon } from '@mui/icons-material';
import withResizeHandler from '../../hoc/withResizeHandler';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';
import smallLogo from '../../Images/smalllogo.png';
// Temporary example image for user avatar
import avatarImage from '../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { loggedInUser, logout } = useAuth();

  let navLogo = smallLogo;

  if (typeof window !== 'undefined') {
    if (window.matchMedia('(min-width:600px)').matches) {
      navLogo = logo;
    }
  }

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const classes = useStyles();

  // Different display based on whether user is logged in or not
  const rightNav = () => {
    if (loggedInUser) {
      return (
        <div className={classes.navButtonGroup}>
          <Button>My Sitters</Button>
          <Button>Messages</Button>
          <Avatar
            src={avatarImage}
            sizes="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          />
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ProfileIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
        </div>
      );
    } else {
      return (
        <div className={classes.navButtonGroup}>
          <Link component={LinkComponent} to="/#">
            Become a sitter
          </Link>
          <div className={classes.navButtons}>
            <Button component={LinkComponent} to="/login" variant="outlined">
              Login
            </Button>
            <Button component={LinkComponent} to="/signup" variant="contained">
              Sign Up
            </Button>
          </div>
        </div>
      );
    }
  };

  return (
    <AppBar classes={{ root: classes.navbar }} position="static">
      <Toolbar>
        <img src={navLogo} alt="Loving Sitter Logo" />
        {rightNav()}
      </Toolbar>
    </AppBar>
  );
};

// withResizeHandler is a parent component that updates on window resize.
export default withResizeHandler(Navbar);
