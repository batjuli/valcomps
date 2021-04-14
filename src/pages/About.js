import { Typography } from '@material-ui/core';
import React from 'react';

import Container from '@material-ui/core/Container';

const About = () => {
  return (
    <Container
      component='main'
      maxWidth='md'
      className='main'
      style={{ color: '#FFFFFF' }}
    >
      <Typography variant='h5' noWrap style={{ color: '#FF4655' }}>
        About
      </Typography>
      <Typography variant='body1'>
        Valcomps is a single page web app for planning and sharing your Valorant
        team comps.
        <br /> <br />
        This is a fan-made site and is not associated or affiliated with Riot
        Games.
        <br />
        Developed using React.js, react-router and material-ui.
      </Typography>
    </Container>
  );
};

export default About;
