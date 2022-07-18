import React from 'react'
import './navbar.css'
import logo from '../../logo.png'
export default function Navbar(props){
    var height = {height: "100px"};
    if(props.height){
        height = {height: "70px"};
    }
    return (
        <div id='space'>
            <nav id='navbar'>
                <img src={logo} alt='logo' style={height}/>
                <ul id='nav-links'>
                    <li><a style={height} href='#HomeSection' className='nav-link'>Home</a></li>
                    <li><a style={height} href='#ToursSection' className='nav-link'>Tours</a></li>
                    <li><a style={height} href='#AboutSection' className='nav-link'>About</a></li>
                </ul>
            </nav>
        </div>
    );
}