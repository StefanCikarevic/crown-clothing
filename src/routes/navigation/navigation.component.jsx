import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";
import './navigation.styles.scss';
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                    <CrwnLogo>Logo</CrwnLogo>
                </Link>
                <div className='nav-links-container '>
                    <Link to='/shop' className='nav-link'>Shop</Link>
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    );
}

export default Navigation;
