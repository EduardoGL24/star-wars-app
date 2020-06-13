import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Layout from './components/Layout';
import Home from './pages/Home';
import Characters from './pages/Characters';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
