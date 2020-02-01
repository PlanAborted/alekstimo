import React from 'react';

import { IconButton, Grid, Container } from '@material-ui/core';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const PageHeader = ({ name, jobTitle, email, linkedIn, github }) => (
  <Container maxWidth="lg">
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{
        color: '#ffffff',
        height: '450px',
      }}>
      <Grid item>
        <img alt="Aleksandar's profile pic" src="./profilePic.png" />
      </Grid>
      <Grid item>
        <h1>{name}</h1>
      </Grid>
      <Grid item>
        <h2>{jobTitle}</h2>
      </Grid>
      <Grid item>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <IconButton href={linkedIn} target="_blank">
              <LinkedInIcon fontSize="large" style={{ color: '#ffffff' }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href={github} target="_blank">
              <GithubIcon fontSize="large" style={{ color: '#ffffff' }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href="./Resume.pdf"
              target="_blank"
              style={{
                color: '#ffffff',
                fontSize: '24px',
                fontWeight: 'bold',
              }}>
              <InsertDriveFileIcon fontSize="large" />
              CV
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
);

export default PageHeader;
