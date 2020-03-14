import React from 'react';

import { ItemContent } from '.';
import { Project } from '../Project';
import { Section } from '..';

import {
  Grid,
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
  localeIsFrench,
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

        {projects && projects.length > 0 && (
          <Section
            title={localeIsFrench ? 'Projet(s)' : 'Project(s)'}
            titleVariant="h6">
            {projects.map((details, index) => (
              <Grid item key={index}>
                <Project {...details} />
              </Grid>
            ))}
          </Section>
        )}
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
