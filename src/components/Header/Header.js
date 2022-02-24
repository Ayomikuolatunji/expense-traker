import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {AiOutlineCreditCard} from "react-icons/all"

export default function MenuAppBar() {


  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AiOutlineCreditCard />
          </IconButton>
          <Typography variant="h6" component="div">
            Expense Tracker
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
