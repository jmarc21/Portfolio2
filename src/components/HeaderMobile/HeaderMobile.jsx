import React, { Component } from 'react';

export default class HeaderMobile extends Component {
    constructor(){
        super();
        this.state = {
            animate: false,
            menuOut: false
        }
    }
    animateMenu(){
        this.setState({
            animate: this.state.animate ? false : true,
            menuOut: this.state.menuOut ? false : true
        })
    }
    render() {
        return (
            <div style={{ backgroundColor: 'white', minHeight: '100vh', minWidth: '100vw' }}>
                <div className={this.state.animate ? "hamMenuContainer mobileSlideHam" : "hamMenuContainer"} onClick={() => this.animateMenu()}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
                <div className={this.state.animate ? `menuLinks ${this.state.menuOut ? 'mobileSlide': 'mobileSlideIn'}` : "menuLinks"}>
                    <div style={{ textDecoration: 'none', color: 'white', cursor: "pointer" }} onClick={() => this.scroll('home')}  ><div>Home</div></div>
                    <div style={{ textDecoration: 'none', color: 'white', cursor: "pointer" }} onClick={() => this.scroll('aboutme')}  ><div>About Me</div></div>
                    <div style={{ textDecoration: 'none', color: 'white', cursor: "pointer" }} onClick={() => this.scroll('skills')}  ><div>Skills</div></div>
                    <div style={{ textDecoration: 'none', color: 'white', cursor: "pointer" }} onClick={() => this.scroll('projects')} ><div>My Work</div></div>
                    <div style={{ textDecoration: 'none', color: 'white', cursor: "pointer" }} onClick={() => this.scroll('contactme')} ><div>Contact Me</div></div>
                </div>
            </div>
        )
    }
}