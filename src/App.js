import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Starships from "./pages/Starships";
import Starship from "./pages/Starship";
import Films from "./pages/Films";
import Vehicles from "./pages/Vehicles";
import Planets from "./pages/Planets";
import Film from "./pages/Film";
import Vehicle from "./pages/Vehicle";
import Planet from "./pages/Planet";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/characters/:id" component={Character} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/films/:id" component={Film} />
          <Route exact path="/starships" component={Starships} />
          <Route exact path="/starships/:id" component={Starship} />
          <Route exact path="/vehicles" component={Vehicles} />
          <Route exact path="/vehicles/:id" component={Vehicle} />
          <Route exact path="/planets" component={Planets} />
          <Route exact path="/planets/:id" component={Planet} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
