import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Dashboard from './protected/Dashboard'
import { logout } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount() {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading...</h1> : (
      <BrowserRouter>
        <div>
          <div className="ui inverted menu">
            <a className="item active">
              <Link to="/"></Link>
            </a>
            <div className="right menu">
              <a className="ui item">
                <Link to="/dashboard" className="login">Home</Link>
              </a>
              <a className="ui item">
                {this.state.authed
                  ? <button
                    style={{ border: 'none', background: 'transparent' }}
                    onClick={() => {
                      logout()
                    }}
                    className="login">Logout</button>
                  : <span>
                    <Link to="/login" className="login">Login</Link>
                    <Link to="/register" className="login">Register</Link>
                  </span>}
              </a>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <Switch>
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
