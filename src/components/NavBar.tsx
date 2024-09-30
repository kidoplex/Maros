mport React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import Box from '@mui/material/Box';

const Navbar: React.FC = () => {
  return (
    <AppBar 
      position="fixed" 
      color="primary" 
      sx={{ top: 'auto', bottom: 0 }} // Position it at the bottom
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Home Icon */}
        <Link href="/" passHref>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
        </Link>

        {/* Search Icon */}
        <Link href="/hladanie" passHref>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Link>

        {/* Add Post Icon */}
        <Link href="/pridat" passHref>
          <IconButton color="inherit">
            <AddCircleOutlineIcon />
          </IconButton>
        </Link>

        {/* Notifications Icon */}
        <Link href="/notifikacie" passHref>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Link>

        {/* Profile Icon */}
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