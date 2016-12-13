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
    if (obj.password === obj.confirmation) {
      debugger
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
      <div>
        <button className="register-image" onClick={this.switchVisible}>Register</button>
        { this.state.signupform ? <div className="wrap">
          <form className="form" id="signup-form" onSubmit={this.submitSignUp} >
            <label>Register</label><br />
            <input name='first_name' type='text' placeholder='first name' /><br />
            <input name='last_name' type='text' placeholder='last name' /><br />
            <input name='email' type='text' placeholder='email' /><br />
            <input name='username' type='text' placeholder='username' /><br />
            <input name='password' type='password' placeholder='password' /><br />
            <input name='confirmation' type='password' placeholder='confirm password' /><br />
            <button type="submit" value="Submit">Submit</button>

          </form>
        </div> : null}
      </div>
    )
  }
}
