import React, { useState } from 'react';
import { MessageProps } from '../../App';

import './counter.scss';
const Count = (props: MessageProps): any => {
  const [count, setCount] = useState(0);

  const increase = (): void => {
    setCount(count + 1);
  };
  const decrease = (): void => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <div className="counter">
      <p>
        {props.message}: {count}
      </p>
      <div className="btn-flex">
        <button type="button" onClick={increase}>
          INCREASE
        </button>
        <button type="button" onClick={decrease}>
          DECREASE
        </button>
      </div>
    </div>
  );
};

export default Count;
