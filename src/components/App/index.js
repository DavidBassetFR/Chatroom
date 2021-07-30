// == Import npm
import React from 'react';

import Settings from 'src/containers/Settings';
import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';

import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Settings />
    <Messages />
    <Form />
  </div>
);

// == Export
export default App;
