import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Listings from './Listings'
import PetProfile from './PetProfile'
import PostLostForm from './PostLostForm'
import PostFoundForm from './PostFoundForm'
import About from './About'

import { checkAuth } from '../actions/auth'

function App (props) {
  const { auth, dispatch } = props

  useEffect(() => {
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
  }, [])

  return (
    <Router>
      <div id="qwertyuiop" className="container has-text-centered">

        <div className="hero is-small is-primary">
          <div className="hero-body has-text-centered">
            <Link to='/' className="">
              <h1 className="title is-1">Lost and Found</h1>
            </Link>
            <Route path="/" component={Nav} />
          </div>
        </div>

        <div className=''>
          {!auth.isAuthenticated &&
            <Route exact path="/" component={Login} />
          }
          {auth.isAuthenticated && 
            <Route exact path="/" component={Listings} />
          }
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/listings" component={Listings} />
          <Route path="/pet-profile" component={PetProfile} />
          <Route path="/lost-form" component={PostLostForm} />
          <Route path="/found-form" component={PostFoundForm} />
          <Route path="/about" component={About} />
        </div>

      </div>
    </Router>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(App)
