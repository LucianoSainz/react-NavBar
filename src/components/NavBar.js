import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(){
    return (
        <>
            <nav className='navbar'>
                <div className="nav-content">
                    <NavLink exct to="/" className='nav-logo'>
                        LucianoSainz
                    </NavLink>
                    
                    <ul className='nav-menu'>
                        <li className="nav-item">
                        <NavLink exct to="/" className='nav-links'>
                            Home
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exct to="/about" className='nav-links'>
                            About
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exct to="/portfolio" className='nav-links'>
                            Portfolio
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exct to="/contact" className='nav-links'>
                            Contact
                        </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;