// src/components/NavBar.tsx

import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/router';

const NavBar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Left Side - Logo or App Name */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref>
            <a style={{ color: 'inherit', textDecoration: 'none' }}>Instagram Clone</a>
          </Link>
        </Typography>

        {/* Right Side - Links and Auth Controls */}
        {session ? (
          <>
            {/* Avatar for Authenticated User */}
            <IconButton onClick={handleMenuClick} color="inherit">
              <Avatar alt={session.user?.name || 'User'} src={session.user?.image || ''} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link href={`/profil/${session.user?.id}`} passHref>
                  <a>Profile</a>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/pridat" passHref>
                  <a>Add Post</a>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleSignOut}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <Button color="inherit" onClick={() => signIn()}>
            Sign In
          </Button>
        )}

        {/* Mobile Menu Button */}
        <IconButton edge="end" color="inherit" aria-label="menu" sx={{ display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
