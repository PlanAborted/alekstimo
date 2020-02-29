import React from 'react';

import { Grid, Typography } from '@material-ui/core';

const PageFooter = () => (
  <Grid container justify="center" alignItems="center">
    <Grid item>
      <Typography variant="body1" justify="center">
        Copyright (c) {new Date().getFullYear()} - Aleksandar Timotijevic
      </Typography>
    </Grid>
  </Grid>
);

export default PageFooter;
