import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Characters from '../containers/Characters';
import Layout from '../components/Layout';
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Characters} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
