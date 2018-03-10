import React, { Component } from 'react';
import './groupproject.css';
import Header from '../header/header';
import { DefaultPlayer as Video } from 'react-html5video';
import vid from './twitter-book.mp4';
import Carousel from 'nuka-carousel';
import Login from './loginTwittterBook.png';
import Feed from './homePage.png';
import Profile from './accountPage.png';
import stepone from './stepOne.png';
import stepthree from './stepThree.png';
import stepfour from './stepFour.png';


export default class Tybl extends Component {
    componentDidMount() {
        setTimeout(function () {
            this.forceUpdate()
        }.bind(this), 100);
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="tyblpage">
                <div className="container fadein">
                    <Header />
                    <div className="CAPtitleContainer">
                        <h1 className="CAPtitle">Twitter Book</h1>
                        <div className="divider"></div>
                    </div>
                    <div className="CAPaboutContainer">
                        <div className="videoWrapper">
                            <Video autoPlay loop muted controls={{ display: 'none' }} style={{ height: '250px', width: '381px', marginLeft: '9px'}}>
                                <source src={vid} type="" />
                            </Video> 
                        </div>
                        <p className="abouttext">
                            <div className='aboutProject'>About</div>
                            <div className="divider down"></div>
                            Twitter Book is a full stack web app that users can create books of their favorite tweets. As well as customize the look and layout of the book.<br />
                            <a href="https://github.com/Twitter-book/Twitter-book" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="gitHubLink"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" className="social" />  GitHub Repo</a>
                            <a href="https://youtu.be/NZpiNxxMy1E" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="gitHubLink">  Video Tutorial</a>
                            <a href="https://twitter-book.justin-demarco.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="gitHubLink">  Live Site</a>
                        </p>
                    </div>
                    <div className="CAPaboutContainer marginSpace">
                        <ul className="smalltext textdown">
                            <div className="aboutProject">Tech used</div>
                            <div className="divider down"></div>
                            <li> Built with React, Redux, Node, Express, PostgresQL, Twitter API. </li>
                            <li> Used the Twitter API to fetch tweets from the user or searched users.  Those tweets then can be added to a book for the user to purchase. </li>
                            <li> Practiced Test Driven Development using Jest and Endpoint testing using Postman. </li>
                        </ul>
                        <Carousel style={{ height: '300px', width: '600px' }} >
                            <img src={Login} />
                            <img src={Feed} />
                            <img src={Profile} />
                            <img src={stepone} />
                            <img src={stepthree} />
                            <img src={stepfour} />
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
}