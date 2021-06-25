/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from './button';

const Card = (props) => {
  return (
    <div className={props.classVal}>
      <h2>Events in react.js</h2>
      <label htmlFor="name">Enter name</label>
      <input
        type="text"
        id="name"
        className={props.inputClass}
        onChange={props.nameChangeHandler}
        onFocus={props.inputFocusHandler}
        onBlur={props.inputBlurHandler}
      />
      <label htmlFor="position">Enter Designation</label>
      <input
        type="text"
        id="position"
        className={props.inputClass}
        onChange={props.positionChangeHandler}
        onFocus={props.inputFocusHandler}
        onBlur={props.inputBlurHandler}
      />
      <div>
        <Button
          color="palevioletred"
          onEnter={props.enterClassHandler}
          onExit={props.exitClassHandler}
        >
          Pink
        </Button>
        <Button
          color="plum"
          onEnter={props.enterClassHandler}
          onExit={props.exitClassHandler}
        >
          Violet
        </Button>
        <Button
          color="palegreen"
          onEnter={props.enterClassHandler}
          onExit={props.exitClassHandler}
        >
          Green
        </Button>
      </div>
      <Button color="lightblue" onSubmit={props.onSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Card;
