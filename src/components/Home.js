import React, { useState } from 'react';

import { PageHeader, PageContent, PageFooter } from './Page';

import { aboutText, jobs, studies, personnalInformations } from '../data';
import {
  createMuiTheme,
  ThemeProvider,
  Container,
  CssBaseline,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#303030',
    color: theme.palette.grey[50],
    padding: theme.spacing(5),
  },
  content: {
    padding: theme.spacing(5, 0),
  },
  footer: {
    backgroundColor: '#303030',
    color: theme.palette.grey[50],
    padding: theme.spacing(5),
  },
  switch: {
    color: theme.palette.grey[50],
    fontSize: '24px',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <ThemeProvider
      theme={createMuiTheme({
        typography: {
          fontSize: 12,
        },
      })}>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        classes={{ root: classes.header }}>
        <PageHeader {...personnalInformations} />
      </Container>
      <Container
        maxWidth={false}
        disableGutters
        classes={{ root: classes.content }}>
        <PageContent aboutText={aboutText} jobs={jobs} studies={studies} />
      </Container>
      <Container
        maxWidth={false}
        disableGutters
        classes={{ root: classes.footer }}>
        <PageFooter />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
