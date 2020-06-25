import React from 'react';
import Count from './components/Count';
import './app.scss';

export interface CountProps {
  num: number;
}
export const App = () => {
  return (
    <div className="App">
      <h1>Hi React</h1>
      <Count num={0} />
    </div>
  );
};
