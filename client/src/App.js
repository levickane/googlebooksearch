import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Save from './pages/Save';
import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route exact path={'/search'}>
            <Search />
          </Route>
          <Route exact path={'/save'}>
            <Save />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
