import React from 'react';

import { PageHeader, About, Experience, Education, PageFooter } from '.';

import { aboutText, jobs, studies, personnalInformations } from '../data';

const Home = () => (
  <div>
    <div
      style={{
        backgroundColor: '#212121',
      }}>
      <PageHeader {...personnalInformations} />
    </div>
    <About text={aboutText} />
    <Experience experiences={jobs} />
    <Education education={studies} />
    <div
      style={{
        backgroundColor: '#212121',
        margin: '20px 0 0 0',
      }}>
      <PageFooter />
    </div>
  </div>
);

export default Home;
