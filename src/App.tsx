import React from 'react';
import Count from './components/counter-component/Count';
import './app.scss';

export interface MessageProps {
  message: string;
}
export const App = () => {
  return (
    <div className="App">
      <h1>Hi React</h1>
      <Count message={'My Counter is'} />
    </div>
  );
};
