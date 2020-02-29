import React from 'react';

import { IconButton, Grid, Typography, Avatar } from '@material-ui/core';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '150px',
    height: '150px',
  },
  icons: {
    color: theme.palette.grey[50],
    fontSize: 24,
  },
}));

const PageHeader = ({ name, jobTitle, links }) => {
  const classes = useStyles();
  const { github, linkedIn, email, resume } = links;

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}>
      <Grid item>
        <Avatar
          alt="Aleksandar's profile pic"
          src="./profilePic.png"
          className={classes.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h5">{jobTitle}</Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row" alignItems="center">
          {linkedIn && (
            <Grid item>
              <IconButton href={linkedIn} target="_blank">
                <LinkedInIcon classes={{ root: classes.icons }} />
              </IconButton>
            </Grid>
          )}
          {github && (
            <Grid item>
              <IconButton href={github} target="_blank">
                <GithubIcon classes={{ root: classes.icons }} />
              </IconButton>
            </Grid>
          )}

          <Grid item>
            <IconButton href={resume} target="_blank">
              <InsertDriveFileIcon classes={{ root: classes.icons }} />
              <Typography classes={{ root: classes.icons }}>CV</Typography>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
