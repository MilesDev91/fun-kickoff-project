import React, { useState } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { Link, AppBar, Toolbar, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Link as LinkComponent } from 'react-router-dom';
import { AccountCircle } from '@mui/icons-material';
import { Person as ProfileIcon, Logout as LogoutIcon, Settings as SettingsIcon } from '@mui/icons-material';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { loggedInUser, logout } = useAuth();

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

  // Display based on whether user is logged in or not
  const rightNav = () => {
    if (loggedInUser) {
      return (
        <>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="primary"
          >
            <AccountCircle />
          </IconButton>
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
        </>
      );
    } else {
      return (
        <div>
          <Link component={LinkComponent} to="/#">
            Become a sitter
          </Link>
        </div>
      );
    }
  };

  return (
    <AppBar classes={{ root: classes.navbar }} position="static">
      <Toolbar>
        <img src={logo} alt="Loving Sitter Logo" />
        {rightNav()}
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
