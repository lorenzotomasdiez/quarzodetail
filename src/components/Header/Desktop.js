import { Avatar, InputBase, Toolbar, Typography , makeStyles} from '@material-ui/core';
import logo from '../../images/logo2.png';
import SearchIcon from '@material-ui/icons/Search'

const Desktop = () => {
    const classes = useStyle();
    return (
        <div>
            <Toolbar className={classes.toolbar}>
                <img src={logo} alt="logo" className={classes.logo}/>
                <div className={classes.center}>
                    <InputBase fullWidth placeholder="search here..." inputProps={{className: classes.input}}/>
                    <SearchIcon />
                </div>
                <div className={classes.right}>
                    <Typography>Sign In</Typography>
                    <Avatar className={classes.avatar}/>
                </div>
            </Toolbar>
        </div>
    )
}
const useStyle = makeStyles((theme)=>({
    root:{
        position:"sticky",
        top: 0,
        background: "#FFF",
        zIndex:99,
        width:"100%"
    },
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
export default Desktop
