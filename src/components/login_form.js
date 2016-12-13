import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import $ from 'jquery'

import logUserIn from "../actions/logUserIn"

class LoginForm extends Component{
  constructor(props) {
    super(props)
    this.submitLoginInfo = this.submitLoginInfo.bind(this)
    this.switchVisible = this.switchVisible.bind(this)
    this.state = {loginform: false}
  }

  // $('#login-form').hide()

  submitLoginInfo(event){
    event.preventDefault()
    let login_params = {
      email: event.target.children[2].value,
      password: event.target.children[4].value
    }
    this.props.logUserIn(login_params)
  }

  switchVisible(event) {
    this.setState({loginform: !this.state.loginform})
  }

  render() {
    return (
      <div>
        <button id="sign-in" onClick={this.switchVisible}>Sign In</button>
          { this.state.loginform ? <div className="wrap">
            <form className="form" id="login-form" onSubmit={this.submitLoginInfo} >
              <label>Log In</label><br />
              <input name='email' type='text' placeholder='email' /><br />
              <input name='password' type='password' placeholder='password' /><br />
              <button type="submit" value="Submit">Submit</button>
            </form>
          </div> : null}
      </div>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({logUserIn: logUserIn}, dispatch)
}
export default connect(null, mapDispatchToProps)(LoginForm)
