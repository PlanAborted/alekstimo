import React from 'react';

import { Project } from './';

import { Grid, Container } from '@material-ui/core';

const Projects = ({ projects }) => (
  <Container>
    <h4>Projet(s)</h4>
    <Grid container direction="column" justify="space-around">
      {projects.map((details, index) => (
        <Project {...details} key={index} />
      ))}
    </Grid>
  </Container>
);

export default Projects;
