import React from 'react';
import ChordID from './components/ChordID';
import EarTraining from './components/EarTraining'
import MainNav from './components/MainNav';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

export default (
    <Router >
        <div id="body-container">
            <MainNav />
            <Switch>
                <Route exact path = "/" component = {ChordID} />
                <Route exact path = "/ear-training" component = {EarTraining} />
            </Switch>
        </div>
    </Router>

);