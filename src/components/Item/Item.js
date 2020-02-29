import React from 'react';

import { ItemContent } from '.';
import { Projects } from '../Project';

import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Avatar,
  Grid,
  Typography,
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
}) => {
  let cardContent;
  if (summary || description || bulletPoints || mainTechnos || projects) {
    cardContent = (
      <CardContent>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <ItemContent
              summary={summary}
              description={description}
              bulletPoints={bulletPoints}
              mainTechnos={mainTechnos}
            />
          </Grid>

          {projects && projects.length > 0 && (
            <Grid item>
              <Projects projects={projects} />
            </Grid>
          )}
        </Grid>
      </CardContent>
    );
  }
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={location.logo} />}
        title={<Typography variant="h5">{location.name}</Typography>}
        subheader={`${title} / ${dates}`}
      />
      <Divider variant="fullWidth" />
      {cardContent}
    </Card>
  );
};

export default Item;
