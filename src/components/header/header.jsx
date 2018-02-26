import React, {Component} from 'react';
import './header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
            <nav className='header'>
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><div className='homelink'>Home</div></Link>
                <Link to='/createaplaylist' style={{ textDecoration: 'none', color: 'white' }}><div>Create-A-Playlist</div></Link>
                <h1 className="projectsTitle">My Work</h1>
                <Link to='/tybl' style={{ textDecoration: 'none', color: 'white' }}><div>Tybl</div></Link>
                <Link to='/groupproject' style={{ textDecoration: 'none', color: 'white' }}><div>Group Project</div></Link>
            </nav>
        )
    }
}