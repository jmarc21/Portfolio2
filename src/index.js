import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#c03221',
        textColor: "#0f0f0f",
    }
})

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <App />
        </Router>
    </MuiThemeProvider>
    , document.getElementById('root'));
