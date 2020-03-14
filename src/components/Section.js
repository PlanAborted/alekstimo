import React from 'react';

import { Grid, Divider, Typography } from '@material-ui/core';

const Section = ({ title, children, titleVariant = 'h4' }) => (
  <Grid container direction="column" spacing={2}>
    <Grid item>
      <Typography variant={titleVariant}>{title}</Typography>
    </Grid>
    <Grid item>
      <Divider />
    </Grid>
    <Grid item>{children}</Grid>
  </Grid>
);

export default Section;
