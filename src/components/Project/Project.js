import React, { useState } from 'react';

import { ItemContent } from '../Item';

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

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const Project = ({
  location,
  dates,
  title,
  summary = '',
  description = '',
  bulletPoints = [],
  mainTechnos = [],
}) => {
  const classes = useStyles();

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
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
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
