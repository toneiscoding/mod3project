import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <HistoryEduRoundedIcon fontSize="large" sx={{ mr: 1 }} />
          <Typography variant="h6">iJournal</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Button component={NavLink} to="/" exact activeClassName="active" color="inherit" sx={{ mx: 1 }}>
          Home
        </Button>
        <Button component={NavLink} to="/about" activeClassName="active" color="inherit" sx={{ mx: 1 }}>
          About
        </Button>
        <Button component={NavLink} to="/create" activeClassName="active" color="inherit" sx={{ mx: 1 }}>
          Create
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

