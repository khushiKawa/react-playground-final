import React from 'react';

const UserMain = (props) => {
  return (
    <div className={props.userClass}>
      <h2>Preview</h2>
      <img src="https://img.icons8.com/dusk/64/000000/user-manual.png" alt="" />
      <h2>{props.userName}</h2>
      <h4>{props.userPosition}</h4>
    </div>
  );
};

export default UserMain;
