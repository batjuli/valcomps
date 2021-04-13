import React from 'react';

import { Link } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const NavBar = () => {
  const toolbarStyle = {
    backgroundColor: '#FF4655',
  };
  return (
    <AppBar position='relative'>
      <Toolbar style={toolbarStyle}>
        <Typography
          variant='h5'
          color='inherit'
          noWrap
          style={{ flexGrow: '1' }}
          component={Link}
          to='/'
        >
          VALCOMPS
        </Typography>
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
