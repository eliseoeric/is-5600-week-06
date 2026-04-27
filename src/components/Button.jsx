import React from 'react';

const Button = ({ text, handleClick }) => {
  return (
    <button className="pa2 ma2" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;