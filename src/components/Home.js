import React, { useState } from 'react';

import { PageHeader, PageContent, PageFooter } from './Page';
import { Appbar } from '.';

import {
  aboutText,
  jobs,
  studies,
  skills,
  personnalInformations,
} from '../data';
import {
  createMuiTheme,
  ThemeProvider,
  Container,
  CssBaseline,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.grey.A400,
    color: theme.palette.grey[50],
    padding: theme.spacing(15, 5, 6, 5),
  },
  content: {
    padding: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.grey.A400,
    color: theme.palette.grey[50],
    padding: theme.spacing(5),
  },
}));

const Home = () => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);

  const handleSwitchDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider
      theme={createMuiTheme({
        typography: {
          fontSize: 12,
        },
        palette: {
          type: darkMode ? 'dark' : 'light',
        },
      })}>
      <CssBaseline />
      <Appbar
        links={personnalInformations.links}
        handleSwitchDarkMode={handleSwitchDarkMode}
        darkMode={darkMode}
      />
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
        <PageContent
          aboutText={aboutText}
          jobs={jobs}
          studies={studies}
          skills={skills}
        />
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
