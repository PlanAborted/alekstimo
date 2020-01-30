import React from 'react';

import {
  Avatar,
  Chip,
  Paper,
  Grid,
  Divider,
  List,
  ListItem,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Project = ({
  location,
  dates,
  title,
  summary = '',
  description,
  bulletPoints = [],
  mainTechnos = [],
}) => (
  <ExpansionPanel>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header">
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between">
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
    </ExpansionPanelSummary>

    <ExpansionPanelDetails>
      <Grid container direction="column">
        {summary && (
          <p
            style={{
              textAlign: 'justify',
              fontStyle: 'italic',
              padding: '10px 20px',
            }}>
            {summary}
          </p>
        )}
        {description && (
          <p
            style={{
              textAlign: 'justify',
              margin: '30px 20px',
            }}>
            {description}
          </p>
        )}
        {bulletPoints && bulletPoints.length > 0 && (
          <List dense>
            {bulletPoints.map((detail, index) => (
              <ListItem
                style={{
                  textAlign: 'justify',
                }}
                key={index}>
                {detail}
              </ListItem>
            ))}
          </List>
        )}
        <Grid container direction="row">
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
        </Grid>
      </Grid>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

export default Project;
