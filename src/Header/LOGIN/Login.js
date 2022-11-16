import React from 'react'
import './Login.css';

const Login = () => {
  return (
    
    <div className='cover'>
      
      <div className='page'>
      <h2>Login Page</h2>
       <br/>
      <input type="text" placeholder='username' />
      <br/>
      <br/>
      

      <input type="Password" placeholder='Password' />
      <br/>
      <hr/>
      <br/>
      <div className='login-btn'> LOGIN</div>
      </div>
    </div>
  )
}

export default Login
