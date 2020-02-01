import React from 'react';

import { Grid, Avatar } from '@material-ui/core';

const ItemHeader = ({ location, dates, title }) => (
  <Grid
    container
    direction="row"
    alignItems="center"
    justify="space-between"
    alignContent="center">
    <Grid item>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        spacing={3}>
        <Grid item>{location.logo && <Avatar src={location.logo} />}</Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="space-between"
            style={{
              padding: '0px 0px 15px 0px',
            }}>
            <Grid item>
              <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
                {location.name}
              </span>
            </Grid>
            <Grid item>
              <Grid container direction="row" justify="space-between">
                <Grid item>
                  <span style={{ fontStyle: 'italic' }}>{location.adress}</span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <span>{title}</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <span>{dates}</span>
    </Grid>
  </Grid>
);

export default ItemHeader;
