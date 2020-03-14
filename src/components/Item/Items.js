import React from 'react';

import { Item } from '.';

import { Grid } from '@material-ui/core';

const Items = ({ details, localeIsFrench }) => (
  <Grid container direction="column" spacing={3}>
    {details.map((itemDetail, index) => (
      <Grid item key={index}>
        <Item {...itemDetail} localeIsFrench={localeIsFrench} />
      </Grid>
    ))}
  </Grid>
);

export default Items;
