import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import MainPage from './pages/MainPage';
import About from './pages/About';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import GitHubIcon from '@material-ui/icons/GitHub';

const App = () => {
  const toolbarStyle = {
    backgroundColor: '#FF4655',
  };

  const logo = {
    flexGrow: '1',
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginBottom: '40px',
    },
    footer: {
      padding: '10px',
      marginTop: 'auto',
      backgroundColor: 'lightgrey',
      textAlign: 'center',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position='relative'>
          <Toolbar style={toolbarStyle}>
            <Typography variant='h5' color='inherit' noWrap style={logo}>
              VALCOMPS
            </Typography>
            <IconButton
              color='primary'
              aria-label='github repository'
              component='span'
              style={{ color: 'white' }}
              onClick={() =>
                window.open('https://github.com/batjuli/valcomps', '_blank')
              }
            >
              <GitHubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path='/:teamId'>
            <MainPage />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <MainPage />
          </Route>
        </Switch>
        <footer className={classes.footer}>
          <Container maxWidth='sm'>
            <Typography variant='body1'>
              Not associated with Riot Games.
            </Typography>
          </Container>
        </footer>
      </Router>
    </div>
  );
};

export default App;
