import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Services from "./pages/Services";

import Container from "./layout/Container";

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/nomadion-services" exact={true} component={Services} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
