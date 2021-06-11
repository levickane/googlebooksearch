import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Save from './pages/Save';
import NavBar from './components/NavBar';
import JumboTron from './components/JumboTron';
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <JumboTron />
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
