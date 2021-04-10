import { Typography } from '@material-ui/core';
import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const About = () => {
  const useStyles = makeStyles((theme) => ({
    main: {
      marginBottom: '40px',
    },
  }));

  const classes = useStyles();
  return (
    <Container component='main' maxWidth='lg' className={classes.main}>
      <Typography variant='h5' color='inherit' noWrap>
        ABOUT
      </Typography>
    </Container>
  );
};

export default About;
