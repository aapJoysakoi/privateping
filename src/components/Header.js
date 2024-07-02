import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const Header = () => (
  <header>
    <AppBar position="static">
      <Toolbar>
        <ChatIcon aria-hidden="true" />
        <Typography variant="h6" style={{ marginLeft: 10 }} role="heading" aria-level="1">
          PrivatePing
        </Typography>
      </Toolbar>
    </AppBar>
  </header>
);

export default Header;
