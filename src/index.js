import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Route, BrowserRouter as Router } from 'react-router-dom';

//this page will be for all the routing for the site.
//you need to import the page from where its nested before you can route it



//import pages here
import Home from './pages/Home';
import SeeHTML from './pages/SeeHTML';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/SeeHTML" component={SeeHTML} />
        </div>
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();
