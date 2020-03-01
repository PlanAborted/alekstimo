import React from 'react';

import { Grid, Typography, Avatar, IconButton } from '@material-ui/core';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import RoomIcon from '@material-ui/icons/Room';

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

const PageHeader = ({ name, jobTitle, location, links }) => {
  const classes = useStyles();
  const { resume } = links;

  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid item>
        <Avatar
          alt="Aleksandar's profile pic"
          src="./profilePic.png"
          className={classes.avatar}
        />
      </Grid>
      <Grid item container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h4" align="center">
            {name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" align="center">
            {jobTitle}
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justify="center">
          <Grid item>
            <RoomIcon />
          </Grid>
          <Grid item>
            <Typography variant="h5" align="center">
              {location}
            </Typography>
          </Grid>
        </Grid>
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
