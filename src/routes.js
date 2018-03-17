import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Hello from './components/initialLoad/hello';
import Home from './components/home/Home';
import Createaplaylist from './components/creataplaylist/createaplaylist';
import Tybl from './components/tybl/Tybl';
import GroupProject from './components/groupProject/GroupProject';
import HeaderMobile from './components/HeaderMobile/HeaderMobile';

export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/createaplaylist' component={Createaplaylist}/>
        <Route path='/tybl' component={Tybl}/>
        <Route path='/groupproject' component={GroupProject}/>
        <Route path='/header' component={HeaderMobile}/>
    </Switch>
)