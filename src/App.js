import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/characters/:id" component={Character} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
