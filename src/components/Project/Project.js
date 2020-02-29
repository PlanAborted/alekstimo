import React, { useState } from 'react';

import { ItemHeader, ItemContent } from '../Item';

import {
  Card,
  CardHeader,
  CardContent,
  Collapse,
  Avatar,
  IconButton,
  Divider,
  Typography,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Project = ({
  location,
  dates,
  title,
  summary = '',
  description = '',
  bulletPoints = [],
  mainTechnos = [],
}) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={location.logo} />}
        title={
          <Typography variant="subtitle1">{`${location.name} | ${location.adress}`}</Typography>
        }
        subheader={`${title} / ${dates}`}
        action={
          <IconButton onClick={handleExpandClick}>
            <ExpandMoreIcon />
          </IconButton>
        }
      />
      <Divider variant="fullWidth" />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <ItemContent
            summary={summary}
            description={description}
            bulletPoints={bulletPoints}
            mainTechnos={mainTechnos}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Project;
