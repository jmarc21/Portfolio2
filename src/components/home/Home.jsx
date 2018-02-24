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
    scroll(id) {
        var smoothScroll = {
            timer: null,

            stop: function stop() {
                clearTimeout(this.timer);
            },

            scrollTo: function scrollTo(id, callback) {
                var settings = {
                    duration: 1500,
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
        window.onscroll = function () {
            if (document.body.scrollTop > 725 || document.documentElement.scrollTop > 725) {
                this.setState({
                    skillsAnimaton: true,
                })
            }
        }.bind(this)
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
                                    {/* <Link style={{ textDecoration: 'none', color: 'white', cursor: "pointer" }} to='/home'><img src={sig} /></Link> */}
                                    <div style={{ textDecoration: 'none', color: 'white', cursor: "pointer" }} onClick={() => this.scroll('projects')} ><div>Projects</div></div>
                                    <div style={{ textDecoration: 'none', color: 'white', cursor: "pointer" }} onClick={() => this.scroll('contactme')} ><div>Contact Me</div></div>
                                </nav>
                            </div>
                        </div>
                        <div className="namecontainer">
                            <h1 className='name'>Justin DeMarco</h1>
                            <h6 className='jobtitle'>Web Developer</h6>
                        </div>
                        <div className="aboutmecontainer" id="aboutme">
                            <br />
                            <h1 className="skillstitle" >About Me</h1>
                            <div className="divider"></div>
                            {/* <img src={mepic} alt="" className="aboutmepic" /> */}
                            <p className="aboutmecontext">
                                I'm Justin, A Web Developer from Utah. <br />
                                I pursued Web Development because I have a passion to engineer things, as well as technology and business. <br />
                                I'm very excited for you to see what I can do.
                            </p>
                            <div className='socialmedia'>
                                <a href="https://github.com/jmarc21" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" className="social" /></a>
                                <a href="https://www.linkedin.com/in/justindemarco21/" target="_blank" rel="noopener noreferrer"><img src="https://png.icons8.com/metro/1600/linkedin.png" alt="" className="social" /></a>
                                <a href="https://www.instagram.com/justindemarco21/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/2000px-Instagram_simple_icon.svg.png" alt="" className="social" /></a>
                                <a href="https://twitter.com/JustinDeMarco21" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/png/512/8/8800.png" alt="" className="social" /></a>
                            </div>
                            <div className="quote">
                                <p>" Big dreams don't cost anymore than little ones. "<br /> - Andy Frisella</p>
                            </div>
                        </div>
                        <div className="skillsContainer" id="skills">
                            <br />
                            <br/>
                            <div className={this.state.skillsAnimaton ? 'skills fadeup' : 'skills'} id="skills" >
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
                                        <img src="data:image/png;base64,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" alt="" className="icon" />
                                        <div className='iconname'>Node.js</div>
                                    </div>
                                    <div className='iconcontainer'>
                                        <img src="https://tctechcrunch2011.files.wordpress.com/2012/09/html5_badge_512.png" alt="" className="icon" />
                                        <div className='iconname'>HTML5</div>
                                    </div>
                                </div>
                                <div className='skill two'>
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
                                <div className="divider one"></div>
                                <h1 className="skillstitle">And More</h1>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div id="projects"></div>
                        <br/>
                        <br />
                        <br />
                        <br />
                        <h1 className='projecttitle'>Projects</h1>
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
                                <h1 className='projectName'>Group Project</h1>
                                <img src={laptop} alt="" className="laptop" />
                            </div>
                        </div>
                        <div id="contactme">
                            <br />
                            {/* <div className="phone">801-921-0823</div> */}
                            <h1 className="contactmetitle" id="contactme">Contact Me</h1>
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
                        <div className="contactinfo">
                            <div>
                                <h3>Built By Me</h3>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}