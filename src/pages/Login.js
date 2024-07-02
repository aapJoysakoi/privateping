import React from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';

const Login = () => (
  <Container maxWidth="sm">
    <Box mt={10} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Login to PrivatePing
      </Typography>
      <form>
        <TextField label="Username" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" variant="outlined" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Box>
  </Container>
);

export default Login;
