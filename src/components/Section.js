import React from 'react';

import { Grid, Divider, Typography } from '@material-ui/core';

const Section = ({ title, children }) => (
  <Grid container direction="column" spacing={2} style={{ padding: '0' }}>
    <Grid item>
      <Typography variant="h4">{title}</Typography>
    </Grid>
    <Grid item>
      <Divider />
    </Grid>
    <Grid item>{children}</Grid>
  </Grid>
);

export default Section;
