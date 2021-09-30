import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  name: {
    marginLeft: 'auto',
    color: '#512649'
  }
}));

function Nav() {
    const name = "Katherine Lizardo";
    const classes = useStyles();
  
    return (
        <>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.name} >
              {name}
            </Typography>
          </Toolbar>
        </AppBar>
        </>
    );
  }
  
  export default Nav;