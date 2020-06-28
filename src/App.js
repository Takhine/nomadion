import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

// Components
import Home from './pages/Home';
import Container from './layout/Container';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
