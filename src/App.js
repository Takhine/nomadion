import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";

import Container from "./layout/Container";
import ScrollToTop from 'components/ScrollToTop';
function App() {
  return (
    <Router>
    <ScrollToTop />
      <Container>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/nomadion-services" exact={true} component={Services} />
          <Route path="/projects-by-nomadion" exact={true} component={Work} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
