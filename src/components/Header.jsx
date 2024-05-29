import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link } from 'react-router-dom'
import { UserContext } from '../App';
import { useContext , useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../config/firebase'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';

import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
  const navigate = useNavigate();
  
  const logout = async ()=>{
   try {
    await auth.signOut();
    currentUser[1](null);    //2ns state is to set the value;
    localStorage.clear();
    navigate("/")
   }
   catch(err){
    console.log(err);
   }
  }
  const [smallDevice, setSmallDevice] = useState(false);  

  useEffect (()=>{
    if(window.innerWidth < 400)
       setSmallDevice(true);
  },[]);

  const currentUser = useContext(UserContext);    //since in context we are passing array of login user state 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"black"}}>
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:900}}>
            PostItUp
          </Typography>
         
      <Link className = "headerLink"  to="/">Home</Link>
       {  currentUser[0] && <Link className = "headerLink" to = "createpost">Create</Link>}
       { !currentUser[0] && < Link className = "headerLink" to = "login"> <Button variant="contained" color="success" >Login</Button></Link>}
       { currentUser[0] && !smallDevice &&
       <Button size="small"  variant="contained" color="success" sx={{marginRight:'1rem'}} onClick={logout}>Log Out</Button>}
       { currentUser[0] && smallDevice && <Button variant="contained" color="success" sx={{marginRight:'0.4rem', fontSize:'.8rem', padding:'1px'}} onClick={logout}>Log Out</Button>}


             {  currentUser[0] && <IconButton sx={{ p: 0}}>
                <Avatar alt={auth.currentUser.displayName} src={auth.currentUser.photoURL}  />
              </IconButton>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}