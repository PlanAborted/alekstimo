import React from 'react';

import { Header, About, Experience, Education, Footer } from '.';

import { aboutText, jobs, studies, personnalInformations } from '../data';

const Home = () => (
  <div>
    <div
      style={{
        backgroundColor: '#212121',
      }}>
      <Header {...personnalInformations} />
    </div>
    <About text={aboutText} />
    <Experience experiences={jobs} />
    <Education education={studies} />
    <div
      style={{
        backgroundColor: '#212121',
        margin: '20px 0 0 0',
      }}>
      <Footer />
    </div>
  </div>
);

export default Home;
