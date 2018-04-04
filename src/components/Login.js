import React, { Component } from 'react'
import { login, resetPassword } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
  state = { loginMessage: null }
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error) => {
        this.setState(setErrorMsg('Invalid username/password.'))
      })
  }
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }
  render() {
    return (
      <div className="ui margin two column centered grid">
        <h1 className="title"> Inicia Sesión </h1>
        <form className="ui form success four column centered row" onSubmit={this.handleSubmit}>
          <div className="field seven wide tablet nine wide computer column">
            <label>Email</label>
            <input type="email" ref={(email) => this.email = email} placeholder="joe@schmoe.com" />
          </div>
          <div className="field seven wide tablet nine wide computer column">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.loginMessage &&
            <div className="ui negative message" role="alert">
              <span>Error:</span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
            </div>
          }
          <br/>
          <button type="submit" className="large ui teal button">Login</button>
        </form>
      </div>
    )
  }
}