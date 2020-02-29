import React from 'react';

import { Section } from '..';
import { Items } from '../Item';

import { Container, Grid, Typography } from '@material-ui/core';

const PageContent = ({ aboutText, jobs, studies }) => (
  <Container maxWidth="md">
    <Grid container direction="column" spacing={7} style={{ padding: '0' }}>
      <Grid item>
        <Section title="A propos">
          <Typography align="justify" variant="body1">
            {aboutText}
          </Typography>
        </Section>
      </Grid>
      <Grid item>
        <Section title="Experiences">
          <Items details={jobs} />
        </Section>
      </Grid>
      <Grid item>
        <Section title="Formations">
          <Items details={studies} />
        </Section>
      </Grid>
    </Grid>
  </Container>
);

export default PageContent;
