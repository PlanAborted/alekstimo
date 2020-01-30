import React from 'react';

import { Projects } from './';

import {
  Paper,
  Grid,
  Divider,
  List,
  ListItem,
  Chip,
  Container,
  Avatar,
} from '@material-ui/core';

const Item = ({
  location,
  dates,
  title,
  summary,
  description,
  bulletPoints,
  mainTechnos,
  projects,
}) => (
  <Paper
    elevation={4}
    style={{
      padding: '10px 20px',
      margin: '10px 0px',
    }}
    square>
    <Grid container direction="row" alignItems="center" justify="space-between">
      <Grid item>
        <Grid container direction="row" alignItems="center" spacing={3}>
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
                    <span style={{ fontStyle: 'italic' }}>
                      {location.adress}
                    </span>
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
    <Divider variant="fullWidth" />
    <Container>
      {summary && (
        <p
          style={{
            textAlign: 'justify',
            fontStyle: 'italic',
            padding: '5px 0px',
          }}>
          {summary}
        </p>
      )}
      {description && (
        <p style={{ textAlign: 'justify', margin: '10px 0px' }}>
          {description}
        </p>
      )}
      {bulletPoints && bulletPoints.length > 0 && (
        <List dense>
          {bulletPoints.map((detail, index) => (
            <ListItem style={{ textAlign: 'justify' }} key={index}>
              {detail}
            </ListItem>
          ))}
        </List>
      )}
      {mainTechnos &&
        mainTechnos.map((techno) => (
          <Chip
            size="small"
            label={techno}
            style={{
              margin: '2px 2px',
              backgroundColor: '#212121',
              color: '#ffffff',
            }}
          />
        ))}
    </Container>
    {projects && projects.length > 0 && <Projects projects={projects} />}
  </Paper>
);

export default Item;
