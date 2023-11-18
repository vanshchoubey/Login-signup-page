import React, { useState } from 'react'
import validator from 'validator'

import "./App.css"

function Firstloginpage({ clickHandler, checkValidUser }) {
  const [passwordset, setPasswordset] = useState("")
  const [disableHandle, setDisableHandle] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [emailSetter, setEmailSetter] = useState("")
  const [colorInput, setcolorInput] = useState()
  const Handlerclick = (e) => {

    e.preventDefault()
    clickHandler(true)
    if (passwordset === "Vansh123//" && emailSetter === "vansh@gmail.com") {
      checkValidUser("welcome vansh!!")
    }
    else {
      clickHandler(false)
      setDisableHandle(true)
      setErrorMessage("Invalid details")

    }
    if (passwordset === "Aansh123//" && emailSetter === "ansh@gmail.com") {
      checkValidUser("welcome ansh!!")
    }
    else {
      clickHandler(false)
      setDisableHandle(true)
      setErrorMessage("Invalid details")
    }
    if(passwordset===""||emailSetter===""){
      setcolorInput("")
    }

  }
  // if(passwordset===""||emailSetter===""){
  //   setcolorInput("")
  // }

  const validate = (e) => {
    setPasswordset(e.target.value)
    console.log(passwordset)
    if (validator.isStrongPassword(passwordset, {
      minLength: 5, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage("")
      setDisableHandle(false)
    } else {
      setErrorMessage('Password is not strong !!!')
    }
  }

  const emailHandler = (e) => {
    setEmailSetter(e.target.value)
    console.log(emailSetter)
  }
  const colorChanger=()=>{
    // setcolorInput("pink")
  }

  return (
    <div onClick={colorChanger}>
      <div className="main">
        <div>
          <ul className='ul-nav'>
            <li className='vanshMain'>Vansh</li>
          </ul>
        </div>

        <div className="signup-form animateOpen" style={{backgroundColor:{colorInput}}}>
          <form className='mainform' onSubmit={Handlerclick} >
            <h1 className='heading'>Sign In</h1>
            <input className='input' type="email" placeholder='Enter your email' style={{ backgroundColor: colorInput }} onChange={emailHandler} value={emailSetter} />
            <input className="input" type="password" placeholder='Enter password' style={{ backgroundColor: colorInput }} onChange={validate} value={passwordset} />
            {errorMessage === '' ? null :
              <span className='errorMsg'>{errorMessage}</span>}
            <div className=' fix'><button className="logout btn hh1" disabled={disableHandle}>login</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Firstloginpage
