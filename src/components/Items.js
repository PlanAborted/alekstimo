import React from 'react';

import { Item } from './';

import { Grid, Container } from '@material-ui/core';

const Items = ({ details }) => (
  <Grid container direction="column" justify="space-around">
    {details.map((itemDetail, index) => (
      <Item {...itemDetail} key={index} />
    ))}
  </Grid>
);

export default Items;
