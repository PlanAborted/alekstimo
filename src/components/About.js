import React from 'react';

import { Container, Divider } from '@material-ui/core';

const About = ({ text }) => (
  <Container maxWidth="md">
    <h2>A propos</h2>
    <Divider style={{ backgroundColor: '#ffffff' }} />
    <p>{text}</p>
  </Container>
);

export default About;
