import React from 'react';
import './App.css';

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// use HashRouter for github pages
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='root'>
        <NavBar />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/:teamId'>
            <MainPage />
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
