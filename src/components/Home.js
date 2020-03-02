import React, { useState, useEffect } from 'react';

import { PageHeader, PageContent, PageFooter } from './Page';
import { Appbar } from '.';

import dataFR from '../dataFR';
import dataEN from '../dataEN';

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
  const [data, setData] = useState(dataFR);
  const [darkMode, setDarkMode] = useState(false);
  const [localeIsFrench, setLocaleIsFrench] = useState(true);

  const handleSwitchDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleSwitchLocale = () => {
    setLocaleIsFrench(!localeIsFrench);
  };

  useEffect(() => {
    localeIsFrench ? setData(dataFR) : setData(dataEN);
    console.log('TEST');
  }, [localeIsFrench]);

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
        links={data.personnalInformations.links}
        handleSwitchDarkMode={handleSwitchDarkMode}
        darkMode={darkMode}
        handleSwitchLocale={handleSwitchLocale}
        localeIsFrench={localeIsFrench}
      />
      <Container
        maxWidth={false}
        disableGutters
        classes={{ root: classes.header }}>
        <PageHeader {...data.personnalInformations} />
      </Container>
      <Container
        maxWidth={false}
        disableGutters
        classes={{ root: classes.content }}>
        <PageContent
          aboutText={data.aboutText}
          jobs={data.jobs}
          studies={data.studies}
          skills={data.skills}
          localeIsFrench={localeIsFrench}
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
