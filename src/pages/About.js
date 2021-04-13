import { Typography } from '@material-ui/core';
import React from 'react';

import Container from '@material-ui/core/Container';

const About = () => {
  return (
    <Container component='main' maxWidth='lg' className='main'>
      <Typography variant='h5' color='inherit' noWrap>
        ABOUT
      </Typography>
    </Container>
  );
};

export default About;
