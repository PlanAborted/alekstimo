import React from 'react';

import { Item } from './';

import { Grid } from '@material-ui/core';

const Items = ({ details }) => (
  <Grid container direction="column" justify="space-around">
    {details.map((itemDetail, index) => (
      <Grid item key={index}>
        <Item {...itemDetail} />
      </Grid>
    ))}
  </Grid>
);

export default Items;
