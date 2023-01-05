import {Link, Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import './navigation.styles.scss';
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";

const Navigation = () => {

    const {currentUser, setCurrentUser} = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                    <CrwnLogo>Logo</CrwnLogo>
                </Link>
                <div className='nav-links-container '>
                    <Link to='/shop' className='nav-link'>Shop</Link>
                    {currentUser ?
                        (<span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>) :
                        (<Link to='/auth' className='nav-link'>Sign In</Link>)}
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    );
}

export default Navigation;
