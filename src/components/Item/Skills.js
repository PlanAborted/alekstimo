import React from 'react';

import { Skill } from '..';
import { Grid } from '@material-ui/core';

const Skills = ({ skills }) => (
  <Grid container direction="row" justify="center" spacing={4}>
    {skills.map((skill, index) => (
      <Grid item key={index}>
        <Skill {...skill} />
      </Grid>
    ))}
  </Grid>
);

export default Skills;
