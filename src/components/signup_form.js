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
      this.props.onSignupClick(obj)
      $('#registerButton').hide()
    } else {
      alert('Invalid password')
    }
  }

switchVisible(event) {
  this.setState({signupform: !this.state.signupform})
}

  render(){
    return(
      <div className="sign-up-wrap" >
        <button className="register" onClick={this.switchVisible}>Register</button>
        { this.state.signupform ? <div className="wrap">
          <form className="form" id="signup-form" onSubmit={this.submitSignUp} >
            <label>Register</label><br />
            <input name='first_name' type='text' placeholder='first name' required/><br />
            <input name='last_name' type='text' placeholder='last name' required/><br />
            <input name='email' type='text' placeholder='email' required/><br />
            <input name='username' type='text' placeholder='username' required/><br />
            <input name='password' type='password' placeholder='password' required/><br />
            <input name='password_confirmation' type='password' placeholder='confirm password' required/><br />
            <button type="submit" value="Submit">Submit</button>
          </form>
        </div> : null}
      </div>
    )
  }
}
