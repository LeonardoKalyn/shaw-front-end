import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from 'container/home'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>React App</h1>
        </header>
        <div>
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/topics">Topics</Link>
                </li>
              </ul>

              <Route exact path="/" component={Home} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
