import React from 'react';

import { IconButton, Grid, AppBar } from '@material-ui/core';

import LinkedInSharpIcon from '@material-ui/icons/LinkedIn';
import GithubSharpIcon from '@material-ui/icons/GitHub';
import Brightness7SharpIcon from '@material-ui/icons/Brightness7Sharp';
import Brightness4SharpIcon from '@material-ui/icons/Brightness4Sharp';
import EmailIcon from '@material-ui/icons/Email';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: '#303030',
  },
  icons: {
    color: theme.palette.grey[50],
    fontSize: 35,
  },
}));

const Appbar = ({ links, handleSwitchDarkMode, darkMode }) => {
  const classes = useStyles();

  const { github, linkedIn, email } = links;
  return (
    <AppBar classes={{ root: classes.appbar }}>
      <Grid container direction="row" justify="flex-end" alignItems="center">
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
        <Grid item>
          <IconButton onClick={handleSwitchDarkMode}>
            {darkMode ? (
              <Brightness7SharpIcon classes={{ root: classes.icons }} />
            ) : (
              <Brightness4SharpIcon classes={{ root: classes.icons }} />
            )}
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Appbar;
