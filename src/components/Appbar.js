import React, { useState, useEffect } from 'react';

import {
  IconButton,
  Grid,
  AppBar,
  LinearProgress,
  Typography,
} from '@material-ui/core';

import LinkedInSharpIcon from '@material-ui/icons/LinkedIn';
import GithubSharpIcon from '@material-ui/icons/GitHub';
import Brightness7SharpIcon from '@material-ui/icons/Brightness7Sharp';
import Brightness4SharpIcon from '@material-ui/icons/Brightness4Sharp';
import EmailIcon from '@material-ui/icons/Email';

import { makeStyles, withStyles } from '@material-ui/core/styles';

const getDocHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
};

const calculateScrollDistance = () => {
  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const docHeight = getDocHeight();

  const totalDocScrollLength = docHeight - windowHeight;
  const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);
  return scrollPosition;
};

const ColorLinearProgress = withStyles({
  root: {
    height: 7,
  },
  colorPrimary: {
    backgroundColor: '#303030',
  },
  barColorPrimary: {
    backgroundColor: '#fafafa',
  },
})(LinearProgress);

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.grey.A400,
  },
  icons: {
    color: theme.palette.grey[50],
    fontSize: 35,
  },
  locale: {
    color: theme.palette.grey[50],
    fontSize: 25,
  },
}));

const Appbar = ({
  links,
  handleSwitchDarkMode,
  darkMode,
  handleSwitchLocale,
  localeIsFrench,
}) => {
  const classes = useStyles();

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        // Calculates the scroll distance
        setScrollProgress(calculateScrollDistance());
      });
    });
  }, []);

  const { github, linkedIn, email } = links;

  return (
    <AppBar classes={{ root: classes.appbar }}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid item>
          <IconButton onClick={handleSwitchLocale}>
            {localeIsFrench ? (
              <Typography classes={{ root: classes.locale }}>FR</Typography>
            ) : (
              <Typography classes={{ root: classes.locale }}>EN</Typography>
            )}
          </IconButton>
          <IconButton onClick={handleSwitchDarkMode}>
            {darkMode ? (
              <Brightness7SharpIcon classes={{ root: classes.icons }} />
            ) : (
              <Brightness4SharpIcon classes={{ root: classes.icons }} />
            )}
          </IconButton>
        </Grid>
        <Grid item>
          <Grid container>
            {linkedIn && (
              <Grid item>
                <IconButton href={linkedIn} target="_blank">
                  <LinkedInSharpIcon classes={{ root: classes.icons }} />
                </IconButton>
              </Grid>
            )}
            {github && (
              <Grid item>
                <IconButton href={github} target="_blank">
                  <GithubSharpIcon classes={{ root: classes.icons }} />
                </IconButton>
              </Grid>
            )}
            {email && (
              <Grid item>
                <IconButton href={`mailto:${email}`} target="_blank">
                  <EmailIcon classes={{ root: classes.icons }} />
                </IconButton>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <ColorLinearProgress
        variant="determinate"
        value={scrollProgress}
        color="primary"
      />
    </AppBar>
  );
};

export default Appbar;
