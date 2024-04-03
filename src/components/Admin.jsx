import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Admin = () => {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none', 
    fontWeight: 'bold',
  };

  return (
    <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Stack spacing={2}>
        <Button variant='contained' color='success'>
          <Link to='/menu' style={linkStyle}>Menu Management</Link>
        </Button>
        <Button variant='contained' color='success'>
          <Link to='/order' style={linkStyle}>Order Management</Link>
        </Button>
        <Button variant='contained' color='success'>
          <Link to='/feed' style={linkStyle}>Feedback</Link>
        </Button>
        <Button variant='contained' color='success'>
          <Link to='/' style={linkStyle}>Log out</Link>
        </Button>
      </Stack>
    </Box>
  );
};

export default Admin;
