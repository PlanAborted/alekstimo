import React from 'react';

import { List, ListItem, Chip, Container } from '@material-ui/core';

const ItemContent = ({ summary, description, bulletPoints, mainTechnos }) => (
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
      <p style={{ textAlign: 'justify', margin: '10px 0px' }}>{description}</p>
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
      mainTechnos.map((techno, index) => (
        <Chip
          key={index}
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
);

export default ItemContent;
