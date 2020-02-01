import React from 'react';

import { Items } from '.';

import { Container } from '@material-ui/core';

const Experience = ({ experiences }) => (
  <Container maxWidth="md">
    <h2>Experiences</h2>
    <Items details={experiences} />
  </Container>
);

export default Experience;
