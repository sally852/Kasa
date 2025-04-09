import './../styles/Navbar.css';
import logo from './../assets/logo.svg';
import { NavLink } from 'react-router-dom';




function Navbar(){
    return (
        <div className='kasa-navbar'>
            <img src={logo} alt='Logo Kasa' className='logo-kasa'/>
            <nav className='navigation-links'>
            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                Home
            </NavLink>
            <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                About
            </NavLink>
            </nav>
        </div>
    );
}


export default Navbar;