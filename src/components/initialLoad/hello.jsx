import React, {Component} from 'react';
import './hello.css';
import Typist from 'react-typist';

export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }
    componentDidMount(){
        setTimeout(function() {
            window.location = '/home'
        }, 5500);
    }
    render(){
        return(
            <div className='greeting-container'>
                <Typist cursor={{ show: true, blink: true, color: 'white', element: '|'}} className='typist'>
                    <Typist.Delay ms={1000}/>
                    <div className='greeting'>Thank you for viewing my Portfolio.</div>
                </Typist>
            </div>
        )
    }
}