import React, { Component } from 'react'
import $ from 'jquery'


export default class SignUpForm extends Component {
  constructor(props){
    super(props)
    this.submitSignUp = this.submitSignUp.bind(this)
    this.switchVisible = this.switchVisible.bind(this)
    this.state = {signupform: false}
  }

  submitSignUp(event){
    event.preventDefault()
    let obj = {}
    Array.from(event.target.children).forEach((element) => {
      if (element.name) {
        obj[element.name] = element.value
      }
    })
    if (obj.password === obj.password_confirmation) {
      // document.getElementsByClassName('register-image')[0].style.display = '';
      this.props.onSignupClick(obj)
      $('#registerButton').hide()

    } else {
      alert('yo pass is fd')
    }
  }

switchVisible(event) {
  this.setState({signupform: !this.state.signupform})
}

  render(){
    return(
<<<<<<< HEAD
      // <img src="../images/blowfish.svg" />
      <div className="sign-up-wrap" >
=======
      <div>
        <button className="register" onClick={this.switchVisible}>Register</button>
        { this.state.signupform ? <div className="wrap">
          <form className="form" id="signup-form" onSubmit={this.submitSignUp} >
            <label>Register</label><br />
            <input name='first_name' type='text' placeholder='first name' /><br />
            <input name='last_name' type='text' placeholder='last name' /><br />
            <input name='email' type='text' placeholder='email' /><br />
            <input name='username' type='text' placeholder='username' /><br />
            <input name='password' type='password' placeholder='password' /><br />
            <input name='password_confirmation' type='password' placeholder='confirm password' /><br />
            <button type="submit" value="Submit">Submit</button>
>>>>>>> efaef24b0ba0fe52123a014272f2c16b4db87265

          </form>
        </div> : null}
      </div>
    )
  }
}
