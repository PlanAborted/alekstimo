import React from 'react';

import { List, ListItem, Chip, Grid, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  summary: {
    fontStyle: 'italic',
    textAlign: 'justify',
  },
  description: {
    textAlign: 'justify',
  },
  listItem: {
    textAlign: 'justify',
  },
  chip: {
    backgroundColor: '#212121',
    color: '#fafafa',
    margin: '2px',
    padding: '2px',
  },
}));

const ItemContent = ({ summary, description, bulletPoints, mainTechnos }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={2}>
      {summary && (
        <Grid item>
          <Typography variant="body1" classes={{ root: classes.summary }}>
            {summary}
          </Typography>
        </Grid>
      )}
      {description && (
        <Grid item>
          <Typography variant="body1" classes={{ root: classes.description }}>
            {description}
          </Typography>
        </Grid>
      )}
      {bulletPoints && bulletPoints.length > 0 && (
        <Grid item>
          <List dense>
            {bulletPoints.map((detail, index) => (
              <ListItem key={index} classes={{ root: classes.listItem }}>
                <Typography variant="body1">{detail}</Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      )}
      {mainTechnos && (
        <Grid item container direction="row">
          {mainTechnos.map((techno, index) => (
            <Grid item key={index}>
              <Chip
                size="small"
                label={techno}
                classes={{ root: classes.chip }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default ItemContent;
