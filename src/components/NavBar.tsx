import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home">
          <Link href="/" passHref>
            <HomeIcon />
          </Link>
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SnapZoska
        </Typography>

        <Link href="/pridat" passHref>
          <Button color="inherit" startIcon={<AddCircleOutlineIcon />}>
            Add Post
          </Button>
        </Link>

        <Link href="/notifikacie" passHref>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Link>

        <Link href="/profil" passHref>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;