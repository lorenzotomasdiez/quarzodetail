import { AppBar, makeStyles} from '@material-ui/core';
import { useState } from 'react';
import Desktop from './Header/Desktop';
import Mobile from './Header/Mobile';

const Header = () => {
    const classes = useStyle();
    const [mobile, setMobile] = useState(true);
    return (
        <AppBar className={classes.root}>
            {mobile ? <Mobile /> : <Desktop />}
        </AppBar>
    )
}
const useStyle = makeStyles((theme)=>({
    root:{
        position:"sticky",
        top: 0,
        background: "#FFF",
        zIndex:99,
        width:"100%"
    }
}));
export default Header
