import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import MainPage from './pages/MainPage';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className='root'>
        <NavBar />
        <Switch>
          <Route exact path='/team?:teamId'>
            <MainPage />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <MainPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
