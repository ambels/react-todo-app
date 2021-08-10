import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './css/App.css';

import Header from './features/header/Header';
import About from './features/about/About';
import Todos from './features/todos/Todos'

const App = () => {
  return (
    <Router>
      <section className="container-fluid">
        <Header />
        <section className="container mt-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Todos />
            </Route>
            <Route path="/">
              <Todos />
            </Route>
          </Switch>
        </section>
      </section >
    </Router>
  );
}

export default App;
