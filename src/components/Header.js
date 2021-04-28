import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';

const Header = () => {
    const classes = useStyle();
    const displayMobile=()=>{};
    const displayDesktop=()=>{
        <Toolbar className={classes.toolbar}>
            <img src="" alt="logo"/>
        </Toolbar>
    };
    const [mobile, setMobile] = useState(false);
    return (
        <AppBar>
            {mobile ? displayMobile() : displayDesktop()}
        </AppBar>
    )
}

const useStyle = makeStyles((theme)=>{
    toolbar:{
        
    }
})

export default Header
