import React from 'react';
import "./App.css"
import LoginPage from './LoginPage';
import Firstloginpage from './Firstloginpage';
import { useState } from 'react';
export default function App() {
const [clickset, setclickset] = useState(false)
const [nameUser, setnameUser] = useState("welcome back!!")
const clickHandler = (handclick) => {
  setclickset(handclick)
}
const checkValidUser = (e) => {
  setnameUser(e)
}

  return (<div>
  { !clickset&&<Firstloginpage clickHandler={clickHandler} checkValidUser={checkValidUser}/>}
    {clickset&&<LoginPage clickHandler={clickHandler} nameUser={nameUser} />
}
  </div>
     
  );
}
