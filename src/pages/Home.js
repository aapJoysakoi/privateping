import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => (
  <Container maxWidth="md">
    <Box mt={10} textAlign="center">
      <Typography variant="h3" gutterBottom>
        Welcome to PrivatePing
      </Typography>
      <Typography variant="h6" paragraph>
        Your private messaging platform.
      </Typography>
      <Button component={Link} to="/login" variant="contained" color="primary">
        Login
      </Button>
      <Button component={Link} to="/chat" variant="outlined" color="primary" style={{ marginLeft: 10 }}>
        Go to Chat
      </Button>
    </Box>
  </Container>
);

export default Home;
