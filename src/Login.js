import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import loginCss from './Login.css';

  
  class Login extends React.Component {
    
    // Using a class based component here because we're accessing DOM refs
   
    handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      this.props.onSignIn(username, password)
    }
    

    render() {
      return (
       <div>
     
     <form class="modal-content animate" onSubmit={this.handleSignIn.bind(this)}>
      <div class="container">
      <h1 class='loginHeader'>Job Portal</h1>
        <label for="uname"><b>Username</b></label>
        <input type="text" ref="username" placeholder="enter username" required/>
        <label for="psw"><b>Password</b></label>
        <input type="password" ref="password" placeholder="enter password" required/>
        <button type="submit" > Login</button>
        <label>
          <input type="checkbox" name="remember"/> Remember me
        </label>
    </div>
  </form>
     
     </div>
      )
    }
  
  }
  
  
  

  export default Login;
  