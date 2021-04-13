import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container maxWidth='sm'>
        <Typography variant='body1'>Not associated with Riot Games.</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
