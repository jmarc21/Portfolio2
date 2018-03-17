import React, { Component } from 'react';
import './tybl.css';
import Header from '../header/header';
import { DefaultPlayer as Video } from 'react-html5video';
import vid from './tybl-vid-portfolio.mp4';
import Carousel from 'nuka-carousel';
import Login from './Login.png';
import Feed from './Feed.png';
import Profile from './Profile.png';
import Createatrip from './Createatrip.png';


export default class Tybl extends Component {
    constructor() {
        super();
        this.state = {
            login: Login,
            feed: Feed,
            profile: Profile,
            createatrip: Createatrip,
            reloaded: 'no'
        }
    }
    componentDidMount() {
        setTimeout(function () {
            this.setState({
                reloaded: 'yes'
            })
        }.bind(this), 100);
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="tyblpage">
                <div className="container fadein">
                    <Header />
                    <div className="CAPtitleContainer">
                        <h1 className="CAPtitle">Tybl</h1>
                        <div className="divider"></div>
                    </div>
                    <div className="CAPaboutContainer">
                        <div className="videoWrapper">
                            <Video autoPlay loop muted controls={{ display: 'none' }}>
                                {<source src={vid} type="" />}
                            </Video>
                        </div>
                        <p className="abouttext">
                            <div className='aboutProject'>About</div>
                            <div className="divider down"></div>
                            Tybl is a Fullstack Web Application. A travel planning app that allows users to share and plan trips with other users.  <br />
                            <a href="https://github.com/jmarc21/travel-planner" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="gitHubLink"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" className="social" />  GitHub Repo</a>
                            <a href="https://youtu.be/1pkumOKu8VY" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="gitHubLink">  Video Tutorial</a>
                            <a href="http://travel-project.justin-demarco.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="gitHubLink">  Live Site</a>
                        </p>
                    </div>
                    <div className="CAPaboutContainer marginSpace">
                        <ul className="smalltext textdown">
                            <div className="aboutProject">Tech used</div>
                            <div className="divider down"></div>
                            <li> Built with React, Redux, Node, Express, PostgresQL, Auth0. </li>
                            <li> Used Google Maps, Google Places, Google Place Details and Google Photos API to get information on hotels, attractions, transportation, restaurants, and shopping destinations. </li>
                            <li> Used AuthO to login and automatically create user profiles.  </li>
                        </ul>
                        <Carousel style={{ height: '300px', width: '600px' }} >
                            <img src={Login} />
                            <img src={Createatrip} />
                            <img src={Profile} />
                            <img src={Feed} />
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
}