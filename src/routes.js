import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header.js';
import Home from './components/Home/index';
import Artist from './components/Artist';


const Routes = () => (
  <BrowserRouter>
    <Header/>
    <Switch>
        <Route path="/artist/:artistId" component={Artist}/>
        <Route path="/" component={Home}/>
    </Switch>
    
  </BrowserRouter>
)

export default Routes;