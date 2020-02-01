import React from 'react';

import { Projects, ItemHeader, ItemContent } from './';

import { Paper, Divider } from '@material-ui/core';

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
      padding: '30px 20px',
      margin: '10px 0px',
    }}
    square>
    <ItemHeader location={location} dates={dates} title={title} />
    <Divider variant="fullWidth" />
    <ItemContent
      summary={summary}
      description={description}
      bulletPoints={bulletPoints}
      mainTechnos={mainTechnos}
    />

    {projects && projects.length > 0 && <Projects projects={projects} />}
  </Paper>
);

export default Item;
