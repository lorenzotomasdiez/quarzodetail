import { Avatar, InputBase, Toolbar, Typography , makeStyles, IconButton, Drawer, List, ListItem} from '@material-ui/core';
import logo from '../../images/logo2.png';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';

const Mobile = () => {
    const drawerData = [
        "My Account",
        "Loggin",
        "Log Out"
    ];
    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
    const getDrawerChoices = () => {
        return drawerData.map(e=>
           <List>
               <ListItem>{e}</ListItem>
           </List> 
               
        );
    };
    const classes = useStyle();
    const [drawerOpen, setDrawerOpen]=useState(false);
    return (
        <Toolbar>
            <IconButton {...
                {
                    edge:"start", 
                    color: "#ccc",
                    "aria-label":"menu",
                    "aria-haspopup":"true",
                    onClick: handleDrawerOpen,
                }
            }>
                <MenuIcon fontSize="large"/>
            </IconButton>
            <Drawer {...{
                anchor: "left",
                open: handleDrawerOpen,
                onClose: handleDrawerClose,
            }}>
                <div>{getDrawerChoices()}</div>
            </Drawer>
        </Toolbar>
    )
}
const useStyle = makeStyles((theme)=>({
    toolbar:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo:{
        height: "30px",   //alto del logo
        margin: theme.spacing(1,0,0,2),
        objectFit: "contain",
        
    },
    input: {
        fontSize: "1.2rem",
        padding: theme.spacing(1,5,1,5)
    },
    center: {
        display: "flex",
        alignItems: "center",
        minWidth:"600px",
        border: "1px solid lightgray",
        borderRadius:"999px",
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
    right:{
        color:"#333",
        display: "flex",
        alignItems: "center",
        marginLeft: theme.spacing(2)
    },
    avatar:{
        marginLeft: theme.spacing(2)
    }
}))
export default Mobile


//MINUTO 1:30HS