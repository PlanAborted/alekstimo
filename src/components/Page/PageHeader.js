import React from 'react';

import { Grid, Typography, Avatar, IconButton } from '@material-ui/core';

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
  const { resume } = links;

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Avatar
          alt="Aleksandar's profile pic"
          src="./profilePic.png"
          className={classes.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h4" align="center">
          {name}
        </Typography>
        <Typography variant="h5" align="center">
          {jobTitle}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton href={resume} target="_blank">
          <InsertDriveFileIcon classes={{ root: classes.icons }} />
          <Typography classes={{ root: classes.icons }}>CV</Typography>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
