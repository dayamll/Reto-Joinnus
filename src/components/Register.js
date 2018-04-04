import React, { Component } from 'react'
import { auth } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  render() {
    return (
      <div className="ui margin two column centered grid">
        <h1 className="title">Registrate</h1>
        <form className="ui form success four column centered row" onSubmit={this.handleSubmit}>
          <div className="field seven wide tablet nine wide computer column">
            <label>Email</label>
            <input type="email" ref={(email) => this.email = email} placeholder="joe@schmoe.com" />
          </div>
          <div className="field seven wide tablet nine wide computer column">
            <label>Password</label>
            <input type="password" placeholder="password..." ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.registerError &&
            <div className="ui negative message" role="alert">
              <span>Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <br/>
          <button type="submit" className="large ui teal button">Register</button>
        </form>
      </div>

    )
  }
}
