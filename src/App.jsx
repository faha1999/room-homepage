import React from 'react';
import { About } from './components/About';
import { Header } from './components/Header';
import { Slider } from './components/Slider';

export const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <About />
    </>
  );
};
