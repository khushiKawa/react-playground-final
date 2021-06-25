import React from 'react';

const Button = (props) => {
  return props.onEnter ? (
    <button
      className="button"
      type="button"
      style={{ backgroundColor: props.color }}
      onMouseEnter={() => props.onEnter(props.color)}
    >
      {props.children}
    </button>
  ) : (
    <button
      className="button"
      type="button"
      style={{ backgroundColor: props.color }}
      onClick={props.onSubmit}
    >
      {props.children}
    </button>
  );
};

export default Button;
