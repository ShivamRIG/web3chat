import './App.css';
import React from 'react'
import {AppBar,Typography,Toolbar,IconButton,TextField,Button} from '@mui/material'


function App() {
  
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Web Dapp Chat
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField label="Enter the text" id="fullWidth" sx={{marginTop:100,paddingRight:2,width:1500}} />
      <Button variant='outlined'sx={{marginTop:100,height:55}} >Send</Button>
  
   
    </div>
  );
}

export default App;
