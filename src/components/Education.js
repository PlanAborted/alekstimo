import React from 'react';

import { Items } from '.';

import { Container } from '@material-ui/core';

const Education = ({ education }) => (
  <Container maxWidth="md">
    <h2>Formation</h2>
    <Items details={education} />
  </Container>
);

export default Education;
