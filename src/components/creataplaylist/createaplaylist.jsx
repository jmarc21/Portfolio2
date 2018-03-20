import React, { Component } from 'react';
import './createaplaylist.css'
import iphone from './iphone.svg'
import laptop from './laptop-web.png'
import Header from '../header/header'
import { DefaultPlayer as Video } from 'react-html5video'
import vid from './portfolio-firstproject-vid-new.mp4'
import screenshot from './CAPscreenShot.png'
import 'react-html5video/dist/styles.css'

export default class createaplaylist extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div className="CAPpage">
                <div className="container fadein">
                    <Header />
                    <div className="CAPtitleContainer">
                        <h1 className="CAPtitle">Create-A-Playlist</h1>
                        <div className="divider"></div>
                    </div>
                    <div className="CAPaboutContainer">
                        <div className="videoWrapper">
                            <Video autoPlay loop muted controls={{ display: 'none' }}>
                                <source src={vid} type="" />
                            </Video>
                        </div>
                        <p className="abouttext">
                            <div className='aboutProject'>About</div>
                            <div className="divider down"></div>
                            Create-A-Playlist is a Web Application where users can search for tracks and
                            add them to a playlist.  Users can also rearange the tracks in the playlist as well as
                            remove them from the playlist. <br />
                            <a href="https://github.com/jmarc21/PersonalProject1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="gitHubLink"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" className="social" />  GitHub Repo</a>
                            <a href="https://youtu.be/Q9a9qBPKd_w" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="gitHubLink">  Video Tutorial</a>
                        </p>
                    </div>
                    <div className="CAPaboutContainer marginSpace">
                        <ul className="smalltext">
                            <div className="aboutProject">Tech used</div>
                            <div className="divider down"></div>
                            <li> Built with React, Node, JavaScript, HTML, CSS. </li>
                            <li> Using Axios users can search the iTunes API to get track data. </li>
                            <li> Using Node those tracks then can be added, reorderd, and deleted from a playlist. </li>
                        </ul>
                        <img src={screenshot} alt="" className="screenshot" />
                    </div>
                </div>
            </div>
        )
    }
}