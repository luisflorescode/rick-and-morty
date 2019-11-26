import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Characters from '../containers/Characters';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Characters} />
    </Switch>
  </BrowserRouter>
);

export default App;
