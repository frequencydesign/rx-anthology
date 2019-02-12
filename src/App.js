import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Landing from './Landing/Landing.js'
import SuperBowlLanding from './SuperBowlLanding/SuperBowlLanding.js'

class App extends Component {
  render() {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/superbowl/:year" component={SuperBowlLanding} />
                </Switch>
            </Router>
    );
  }
}

export default App;
