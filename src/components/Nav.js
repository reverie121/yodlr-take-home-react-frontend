import React, { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircleOutlined, Groups2Rounded } from '@mui/icons-material';

import UserContext from "../context/UserContext";

const pages = [{text: 'Admin', path: '../admin'}];
const noUserSettings = [
    {text: 'Log In', path: '../login'}, 
    {text: 'Sign Up', path: '../signup'}
];
const userSettings = [
    {text: 'User Profile', path: '../profile'}
];

function Nav() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const { user, setUser } = useContext(UserContext)

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    setUser(null);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Groups2Rounded sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

        {/* Large Screen Logo and Page Menu */}          
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Yodlr
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">                    
                    <Link component={RouterLink} to={page.path} underline="none">{page.text}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        {/* Small Screen Logo and Page Menu */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Y
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 1, mx: 1.5, color: 'white', display: 'block' }}
                    key={page.text}
                >
                    <Link fontSize="medium" underline="hover" component={RouterLink} to={page.path} color="primary.contrastText">{page.text}</Link>
                </Button>
            ))}
          </Box>

        {/* Settings Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleOutlined sx={{color: "primary.contrastText"}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!user && noUserSettings.map((setting) => (
                <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link component={RouterLink} to={setting.path} underline="none">{setting.text}</Link>                  
                    </Typography>
                </MenuItem>
              ))}                
              {user && userSettings.map((setting) => (
                <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link component={RouterLink} to={setting.path} underline="none">{setting.text}</Link>                  
                </Typography>
                </MenuItem>
              ))}
              {user && <MenuItem key='Log Out' onClick={handleLogOut}>
                  <Typography textAlign="center">
                    <Link component={RouterLink} to='../login' underline="none">Log Out</Link>                   
                </Typography>
                </MenuItem>}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;