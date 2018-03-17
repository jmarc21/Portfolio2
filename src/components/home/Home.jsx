import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import axios from 'axios';
import pic from './profile.jpg';
import TextField from 'material-ui/TextField';
// import mepic from './profile.jpg'
import laptop from './laptop.svg';
import sig from './signiture.svg';
import Typist from 'react-typist';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            userEmail: '',
            userName: '',
            subject: '',
            body: '',
            thankyou: false,
            CAPdetails: true,
            Tybldetails: true,
            projectmenu: true,
            skillsAnimaton: false,
            animateLoad: true,
            Twitterdetails: true,
        }
    }
    componentDidMount() {
        setTimeout(function () {
            this.setState({
                animateLoad: false
            })
        }.bind(this), 3500);
    }
    updateUserEmail(val) {
        this.setState({
            userEmail: val
        })
    }
    updateUserName(val) {
        this.setState({
            userName: val
        })
    }
    updateSubject(val) {
        this.setState({
            subject: val
        })
    }
    updateBody(val) {
        this.setState({
            body: val
        })
    }
    submitEmail() {
        var emailInfo = {
            from: this.state.userEmail,
            name: this.state.userName,
            subject: this.state.subject,
            text: this.state.body
        }
        axios.post('/sendEmail', emailInfo).then(res => {
            if (res.status === 200) {
                this.setState({
                    thankyou: true
                })
                setTimeout(() => {
                    this.setState({
                        thankyou: false
                    })
                }, 2500);
            }
        })
    }
    showCAPdetails() {
        this.setState({
            CAPdetails: false
        })
    }
    showTybldetails() {
        this.setState({
            Tybldetails: false
        })
    }
    showCAPdetailsOut() {
        this.setState({
            CAPdetails: true
        })
    }
    showTybldetailsOut() {
        this.setState({
            Tybldetails: true
        })
    }
    showTwitterdetails() {
        this.setState({
            Twitterdetails: false
        })
    }
    showTwitterdetailsOut() {
        this.setState({
            Twitterdetails: true
        })
    }
    scroll(id) {
        var smoothScroll = {
            timer: null,

            stop: function stop() {
                clearTimeout(this.timer);
            },

            scrollTo: function scrollTo(id, callback) {
                var settings = {
                    duration: 1300,
                    easing: {
                        outQuint: function outQuint(t, b, c, d) {
                            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                        }
                    }
                };
                var percentage;
                var startTime;
                var node = document.getElementById(id);
                var nodeTop = node.offsetTop;
                var nodeHeight = node.offsetHeight;
                var body = document.body;
                var html = document.documentElement;
                var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                var windowHeight = window.innerHeight;
                var offset = window.pageYOffset;
                var delta = nodeTop - offset;
                var bottomScrollableY = height - windowHeight;
                var targetY = bottomScrollableY < delta ? bottomScrollableY - (height - nodeTop - nodeHeight + offset) : delta;

                startTime = Date.now();
                percentage = 0;

                if (this.timer) {
                    clearInterval(this.timer);
                }

                function step() {
                    var yScroll;
                    var elapsed = Date.now() - startTime;

                    if (elapsed > settings.duration) {
                        clearTimeout(this.timer);
                    }

                    percentage = elapsed / settings.duration;

                    if (percentage > 1) {
                        clearTimeout(this.timer);

                        if (callback) {
                            callback();
                        }
                    } else {
                        yScroll = settings.easing.outQuint(elapsed, offset, targetY, settings.duration);
                        window.scrollTo(0, yScroll);
                        this.timer = setTimeout(step, 10);
                    }
                }
                this.timer = setTimeout(step, 10);
            }
        };
        smoothScroll.scrollTo(id)
    }
    render() {
        return (
            <div style={{ backgroundColor: "black" }}>
                {this.state.animateLoad ?
                    <div className='greeting-container'>
                        <div className="thankyou">Thank you for visiting my portfolio.</div>
                        <div className="loader">
                            <h1 className="loaderTitle">LOADING</h1>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div> :
                    <div className="body">
                        <div className='backgroundimg' id="home">
                            <div className='opac'>
                                <nav className='headerhome'>
                                    <div style={{ textDecoration: 'none', color: 'white', cursor: "pointer" }} onClick={() => this.scroll('home')} ><div>Home</div></div>
                                    <div style={{ textDecoration: 'none', color: 'white', cursor: "pointer" }} onClick={() => this.scroll('aboutme')}  ><div>About Me</div></div>
                                    <div style={{ textDecoration: 'none', color: 'white', cursor: "pointer" }} onClick={() => this.scroll('skills')}  ><div>Skills</div></div>
                                    <div style={{ textDecoration: 'none', color: 'white', cursor: "pointer" }} onClick={() => this.scroll('projects')} ><div>My Work</div></div>
                                    <div style={{ textDecoration: 'none', color: 'white', cursor: "pointer" }} onClick={() => this.scroll('contactme')} ><div>Contact Me</div></div>
                                </nav>
                            </div>
                        </div>
                        <div className="namecontainer">
                            <h1 className='name'>Justin DeMarco</h1>
                            <h6 className='jobtitle'>Web Developer</h6>
                        </div>
                        <div className="color">
                            <div className="aboutmecontainer" id="aboutme">
                                <br />
                                <h1 className="skillstitle" >About Me</h1>
                                <div className="divider"></div>
                                <p className="aboutmecontext">
                                    I'm Justin, A Web Developer from Utah. <br />
                                    I pursued Web Development because I have a passion to engineer things, as well as technology and business. <br />
                                    I'm very excited for you to see what I can do.
                                </p>
                                <div className="quote">
                                    <p>" Big dreams don't cost anymore than little ones. "<br /> - Andy Frisella</p>
                                </div>
                                <div className='socialmedia'>
                                    <a href="https://github.com/jmarc21" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" className="social" /></a>
                                    <a href="https://www.linkedin.com/in/justindemarco21/" target="_blank" rel="noopener noreferrer"><img src="https://png.icons8.com/metro/1600/linkedin.png" alt="" className="social" /></a>
                                    <a href="https://www.instagram.com/justindemarco21/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/2000px-Instagram_simple_icon.svg.png" alt="" className="social" /></a>
                                    <a href="https://twitter.com/JustinDeMarco21" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/png/512/8/8800.png" alt="" className="social" /></a>
                                </div>
                            </div>
                            <div className="skillsContainer" id="skills" >
                                <h1 className='skillstitle'>Skills</h1>
                                <div className="divider"></div>
                                <div className='skill'>
                                    <div className='iconcontainer'>
                                        <img src="https://wmira.gallerycdn.vsassets.io/extensions/wmira/react-playground-vscode/0.0.11/1494599205180/Microsoft.VisualStudio.Services.Icons.Default" alt="" className="icon" />
                                        <div className='iconname'>React</div>
                                    </div>
                                    <div className='iconcontainer'>
                                        <img src="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" alt="" className="icon" />
                                        <div className='iconname'>Angular</div>
                                    </div>
                                    <div className='iconcontainer'>
                                        <img src="https://chapmanjeff.github.io/portfolio/img/portfolio/thumbnails/JavaScript-logo.png" alt="" className="icon" />
                                        <div className='iconname'>JavaSript</div>
                                    </div>
                                    <div className='iconcontainer'>
                                        <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="" className="icon" />
                                        <div className='iconname'>Node.js</div>
                                    </div>
                                    <div className='iconcontainer'>
                                        <img src="https://tctechcrunch2011.files.wordpress.com/2012/09/html5_badge_512.png" alt="" className="icon" />
                                        <div className='iconname'>HTML5</div>
                                    </div>
                                    <div className="iconcontainer">
                                        <img src="https://www.shareicon.net/download/2015/09/08/97876_css_512x512.png" alt="" className="icon" />
                                        <div className='iconname'>CSS3</div>
                                    </div>
                                    <div className="iconcontainer">
                                        <img src="http://jamesdcarlson.com/images/api.svg" alt="" className="icon" />
                                        <div className='iconname'>RESTful</div>
                                    </div>
                                    <div className="iconcontainer">
                                        <img src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" alt="" className="icon" />
                                        <div className='iconname'>Redux</div>
                                    </div>
                                    <div className="iconcontainer">
                                        <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/landscape/expressjslogo.png" alt="" className="icon" />
                                        <div className='iconname'>Express</div>
                                    </div>
                                    <div className="iconcontainer">
                                        <img src="http://jamesdcarlson.com/images/git.svg" alt="" className="icon" />
                                        <div className='iconname'>GitHub</div>
                                    </div>
                                    <div className="iconcontainer">
                                        <img src="http://jamesdcarlson.com/images/postgresql.svg" alt="" className="icon" />
                                        <div className='iconname'>PostgresQL</div>
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                            <div className='aboutmecontainer' id="projects">
                                <h1 className='projecttitle'>My Work</h1>
                                <div className="divider"></div>
                                <div className="projects">
                                    <div className="project">
                                        <h1 className='projectName'>Create-A-Playlist</h1>
                                        <img src={laptop} alt="" className="laptop" />
                                        <div onMouseOver={() => this.showCAPdetails()} onMouseOut={() => this.showCAPdetailsOut()}>
                                            {this.state.CAPdetails ?
                                                <img className="CAPvid" src="https://media.giphy.com/media/X96vlArkPHSbNUewCj/giphy.gif"
                                                    alt="Create-A-Playlist GIF" /> :
                                                <Link to="/createaplaylist"><div>
                                                    <img className="CAPvid" src="https://media.giphy.com/media/X96vlArkPHSbNUewCj/giphy.gif"
                                                        alt="Create-A-Playlist GIF" />
                                                    <div className="CAPdetails">Built with <br /> React, Node, <br /> HTML, and CSS.</div>
                                                </div></Link>
                                            }
                                        </div>
                                    </div>
                                    <div className="project">
                                        <h1 className='projectName'>Tybl</h1>
                                        <img src={laptop} alt="" className="laptop" />
                                        <div onMouseOver={() => this.showTybldetails()} onMouseOut={() => this.showTybldetailsOut()}>
                                            {this.state.Tybldetails ?
                                                <img className="CAPvid" src="https://media.giphy.com/media/2tSkUPstWNoXBuggpD/giphy.gif"
                                                    alt="Create-A-Playlist GIF" /> :
                                                <Link to="/tybl"><div>
                                                    <img className="CAPvid" src="https://media.giphy.com/media/2tSkUPstWNoXBuggpD/giphy.gif"
                                                        alt="Create-A-Playlist GIF" />
                                                    <div className="CAPdetails">Built with <br /> React, Redux, <br /> PostgresQL, and Auth0.</div>
                                                </div></Link>
                                            }
                                        </div>
                                    </div>
                                    <div className="project">
                                        <h1 className='projectName'>Twitter Book</h1>
                                        <img src={laptop} alt="" className="laptop" />
                                        <div onMouseOver={() => this.showTwitterdetails()} onMouseOut={() => this.showTwitterdetailsOut()}>
                                            {this.state.Twitterdetails ?
                                                <img className="CAPvid gif" src="https://media.giphy.com/media/E0JteKnrvy0NZy2cCV/giphy.gif"
                                                    alt="Create-A-Playlist GIF" /> :
                                                <Link to="/groupproject"><div>
                                                    <img className="CAPvid gif" src="https://media.giphy.com/media/E0JteKnrvy0NZy2cCV/giphy.gif"
                                                        alt="Create-A-Playlist GIF" />
                                                    <div className="CAPdetails">Built with <br /> React, Redux, <br /> PostgresQL, and Twitter API.</div>
                                                </div></Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="contactme">
                                <h1 className="contactmetitle">Contact Me</h1>
                                <div className="divider"></div>
                                <div className={this.state.thankyou ? 'thankyouslide slide' : 'thankyouslide'}>
                                    <h2>Message Sent</h2>
                                    <h2>Thank You</h2>
                                </div>
                                <div className="emailcontainer">
                                    <TextField floatingLabelText='Name' style={{ width: '50vw', marginLeft: 'auto', marginRight: 'auto' }} onChange={e => this.updateUserName(e.target.value)} />
                                    <TextField floatingLabelText='youremail@mail.com' style={{ width: '50vw', marginLeft: 'auto', marginRight: 'auto' }} onChange={e => this.updateUserEmail(e.target.value)} />
                                    <TextField floatingLabelText='Subject' style={{ width: '50vw', marginLeft: 'auto', marginRight: 'auto' }} onChange={e => this.updateSubject(e.target.value)} />
                                    <TextField floatingLabelText='Body' multiLine={true} rows={5} cols={30} style={{ width: '50vw', marginLeft: 'auto', marginRight: 'auto' }} onChange={e => this.updateBody(e.target.value)} />
                                    <button onClick={() => this.submitEmail()} className='submitButton'>Submit Email</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}