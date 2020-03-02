import React from 'react';
import { CircularProgress, Typography, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    transform: 'rotate(180deg)',
  },
  top: {
    color: theme.palette.getContrastText(theme.palette.background.default),
  },
  bot: {
    color: theme.palette.grey[600],
    position: 'absolute',
    left: 5,
    top: 5,
  },
  skill: {
    width: '200px',
  },
}));

const Skill = ({ name, description, percentage }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      classes={{ root: classes.skill }}>
      <Grid item classes={{ root: classes.root }}>
        <CircularProgress
          variant="static"
          value={100}
          thickness={3}
          size={90}
          className={classes.bot}
        />
        <CircularProgress
          variant="static"
          value={percentage}
          thickness={7}
          size={100}
          className={classes.top}
        />
      </Grid>
      <Grid item>
        <Typography variant="h5" align="center">
          {name}
        </Typography>
      </Grid>
      {description && (
        <Grid item>
          <Typography variant="body1" align="center">
            {description}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Skill;
