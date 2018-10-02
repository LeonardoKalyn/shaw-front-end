import React from 'react';
import { Panel } from 'react-bootstrap';

const NoMatch = () => (
  <div>
    <Panel bsStyle="danger">
      <Panel.Heading>
        <Panel.Title componentClass="h2">404 - Not Foud</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <h3>
          Greetings
        </h3>
        <p>
          I belive we are both lost. Now... how did we get in here?
        </p>
      </Panel.Body>
    </Panel>
  </div>
);

export default NoMatch;
