import React from 'react'
import "./App.css"

function LoginPage({ clickHandler,nameUser}) {
    const HandlerclickBack = (e) => {
        e.preventDefault()
        clickHandler(false)
      }
  return (
    <div>
       <div className="main">
    <div>
      <ul className='ul-nav'>
        <li className='vanshMain'>Vansh</li>
        <li className='logout' > <button onClick={HandlerclickBack} > Logout</button></li>
      </ul>
    </div>
    <div className="signup-form animateOpen" >
      <div  className='mainform'>
      <h1 className='heading welcome'>{nameUser}</h1>
      </div>
    </div>
    </div>
    </div>
  )
}

export default LoginPage
