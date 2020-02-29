import React from 'react';

import { ItemContent } from '.';
import { Projects } from '../Project';

import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Avatar,
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
        <ItemContent
          summary={summary}
          description={description}
          bulletPoints={bulletPoints}
          mainTechnos={mainTechnos}
        />

        {projects && projects.length > 0 && <Projects projects={projects} />}
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
