import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Well, Navbar, PageHeader } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Home from 'container/home';
import User from 'container/user';

const App = () => (
  <div>
    <Router>
      <Well>
        <Navbar fluid>
          <Navbar.Header>
            <LinkContainer to="/">
              <div>
                <PageHeader>
                  <small>!nrGH </small>
                  Not Really GitHub
                </PageHeader>
              </div>
            </LinkContainer>
          </Navbar.Header>
        </Navbar>
        <Well>
          <Route exact path="/" component={Home} />
          <Route path="/users/:username" component={User} />
        </Well>
      </Well>
    </Router>
  </div>
);

export default App;
