import React from 'react';

import { Section } from '..';
import { Skills } from '../Skill';
import { Items } from '../Item';

import { Container, Grid, Typography } from '@material-ui/core';

const PageContent = ({ aboutText, jobs, studies, skills }) => (
  <Container maxWidth="md">
    <Grid container direction="column" spacing={7}>
      <Grid item>
        <Section title="A propos">
          <Typography align="justify" variant="body1">
            {aboutText}
          </Typography>
        </Section>
      </Grid>
      <Grid item>
        <Section title="Compétences">
          <Skills skills={skills} />
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
