import React from 'react';

import { Section } from '..';
import { Skills } from '../Skill';
import { Items } from '../Item';

import { Container, Grid, Typography } from '@material-ui/core';

const PageContent = ({ aboutText, jobs, studies, skills, localeIsFrench }) => (
  <Container maxWidth="md">
    <Grid container direction="column" spacing={7}>
      <Grid item>
        <Section title={localeIsFrench ? 'A propos' : 'About me'}>
          <Typography align="justify" variant="body1">
            {aboutText}
          </Typography>
        </Section>
      </Grid>
      <Grid item>
        <Section title={localeIsFrench ? 'Compétences' : 'Skills'}>
          <Skills skills={skills} />
        </Section>
      </Grid>
      <Grid item>
        <Section title={localeIsFrench ? 'Expérience' : 'Experience'}>
          <Items details={jobs} localeIsFrench={localeIsFrench} />
        </Section>
      </Grid>
      <Grid item>
        <Section title={localeIsFrench ? 'Formation' : 'Education'}>
          <Items details={studies} />
        </Section>
      </Grid>
    </Grid>
  </Container>
);

export default PageContent;
