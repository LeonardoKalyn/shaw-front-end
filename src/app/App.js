import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from 'container/home';
import User from 'container/user';

const App = () => (
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
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/users/:username" component={User} />
        </div>
      </Router>
    </div>
  </div>
);

export default App;
