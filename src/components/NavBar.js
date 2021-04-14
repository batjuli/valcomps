import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const NavBar = () => {
  const history = useHistory();
  const toolbarStyle = {
    backgroundColor: '#FF4655',
  };
  const handleLogoClick = () => {
    history.push('/');
  };
  return (
    <AppBar position='relative'>
      <Toolbar style={toolbarStyle}>
        <h1
          style={{ color: '#FFFFFF', cursor: 'pointer' }}
          onClick={handleLogoClick}
        >
          VALCOMPS
        </h1>
        <div style={{ flexGrow: '1' }} />
        <Button color='inherit' component={Link} to='/about'>
          About
        </Button>
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
  );
};

export default NavBar;
