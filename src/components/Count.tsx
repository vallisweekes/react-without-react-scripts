import React from 'react';
import { CountProps } from '../App';
const Count = (props: CountProps): any => {
  return (
    <div>
      <p>My Counter is {props.num}</p>
    </div>
  );
};

export default Count;
