import React, { useState } from 'react';
import Card from './components/card';
import './App.css';
import UserMain from './components/userMain';
import UserMini from './components/userMini';
import Events from './components/events';

function App() {
  const [userClass, setUserClass] = useState('user');
  const [userName, setUserName] = useState('Name');
  const [userPosition, setUserPosition] = useState('Designation');
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(false);
  const [cardClass, setCardClass] = useState('card');
  const [eventsClass, setEventsClass] = useState('events');
  const [inputClass, setInputClass] = useState('');

  const enterClassHandler = (selectedColor) => {
    if (selectedColor === 'palevioletred') {
      setUserClass('user userPink');
    } else if (selectedColor === 'plum') {
      setUserClass('user userViolet');
    } else if (selectedColor === 'palegreen') {
      setUserClass('user userGreen');
    }
  };

  const nameChangeHandler = (e) => {
    const nameVal = e.target.value;
    setUserName(nameVal);
  };

  const positionChangeHandler = (event) => {
    const positionVal = event.target.value;
    setUserPosition(positionVal);
  };

  const submitHandler = () => {
    const userObj = {
      class: userClass,
      name: userName,
      position: userPosition,
    };
    const initialUserArr = users;
    initialUserArr.push(userObj);
    setUsers(initialUserArr);
    setUpdate(!update);
  };

  const lightModeHandler = () => {
    setCardClass('card');
  };

  const darkModeHandler = () => {
    setCardClass('card dark');
  };

  const eventsClassHandler = () => {
    return eventsClass === 'events'
      ? setEventsClass('events change')
      : setEventsClass('events');
  };

  const inputFocusHandler = () => {
    setInputClass('border');
  };

  const inputBlurHandler = () => {
    setInputClass('');
  };

  return (
    <>
      <div
        className="cont"
        onMouseUp={lightModeHandler}
        onMouseDown={darkModeHandler}
        tabIndex={-1}
      >
        <div className="App">
          <UserMain
            userClass={userClass}
            userName={userName}
            userPosition={userPosition}
          />
          <Card
            enterClassHandler={enterClassHandler}
            onSubmit={submitHandler}
            classVal={cardClass}
            nameChangeHandler={nameChangeHandler}
            positionChangeHandler={positionChangeHandler}
            inputFocusHandler={inputFocusHandler}
            inputClass={inputClass}
            inputBlurHandler={inputBlurHandler}
          />
          <Events
            eventsClassHandler={eventsClassHandler}
            eventsClass={eventsClass}
          />
        </div>
        <div className="usersCont">
          <UserMini users={users} />
        </div>
        <div className="cite">
          <a href="https://icons8.com/icon/46920/user-manual">
            User Manual icon by Icons8
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
