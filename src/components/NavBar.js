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
                </div>
            </nav>
        </>
    )
}

export default NavBar;