import React from 'react'
import './navbar.css'
import logo from '../../logo.png'
export default function Navbar(){
    return (
        <nav id='navbar'>
            <img src={logo} alt='logo'/>
            <ul id='nav-links'>
                <li><a href='/' className='nav-link'>Home</a></li>
                <li><a href='/' className='nav-link active'>Tours</a></li>
                <li><a href='/' className='nav-link'>About</a></li>
            </ul>
        </nav>
    );
}