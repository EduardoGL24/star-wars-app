import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Starships from "./pages/starships";
import Films from "./pages/Films";
import Vehicles from "./pages/Vehicles";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/characters/:id" component={Character} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/starships" component={Starships} />
          <Route exact path="/vehicles" component={Vehicles} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
