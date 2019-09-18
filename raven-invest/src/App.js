import React from "react";
import "./pages/styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./pages/nav";

import Tools from "./pages/tools";
import Details from "./pages/details";
import Portfolio from "./pages/portfolio";
function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" component={Portfolio} exact />
            <Route path="/details" component={Details} />
            <Route path="/tools" component={Tools} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
