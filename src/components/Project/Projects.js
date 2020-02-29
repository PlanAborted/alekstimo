import React from 'react';

import { Project } from '.';

import { Grid, Container, Typography } from '@material-ui/core';

const Projects = ({ projects }) => (
  <Container>
    <Grid container direction="column" justify="center" spacing={1}>
      <Grid item>
        <Typography variant="h6">Projet(s)</Typography>
      </Grid>
      {projects.map((details, index) => (
        <Grid item key={index}>
          <Project {...details} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
