// import Logo from '../Logo.png'
import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return ( <nav className="navbar" >
        <div className="Title">
            <h2>Yahdi</h2>
        </div>
        <div className="pages">
            <Link to="/"style={{marginRight:"10px"}}>Homepage</Link> 
            <Link to="/Logement" style={{marginRight:"10px"}}>Logements</Link>
            <Link to="/Publication" >Publication</Link>
        </div>
      </nav>
);
}
export default Navbar;