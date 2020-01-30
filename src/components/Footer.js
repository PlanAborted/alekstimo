import React from 'react';

import { Container, Grid } from '@material-ui/core';

const Footer = () => (
  <Container maxWidth="lg">
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ height: '100px', color: '#ffffff' }}>
      Aleksandar Timotijevic
    </Grid>
  </Container>
);

export default Footer;