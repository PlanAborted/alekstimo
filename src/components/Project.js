import React from 'react';

import { ItemHeader, ItemContent } from '.';

import {
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
      <ItemHeader location={location} dates={dates} title={title} />
    </ExpansionPanelSummary>

    <ExpansionPanelDetails>
      <ItemContent
        summary={summary}
        description={description}
        bulletPoints={bulletPoints}
        mainTechnos={mainTechnos}
      />
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

export default Project;
