import { store } from './reducers/store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Login from './components/Login'
import Home from './components/Home'
import QuestionDetails from './components/QuestionDetails'
import Leader from './components/Leader'
import NewQ from './components/NewQ'

//showing the login page 
class App extends Component {

  render() {
    console.log("the current state in app js", store.getState());
    return (
      <Router>
        <Fragment>
          <div className='container'>
            <div>
              <Route path='/' exact component={Login} />
              <Route path='/Home/:id' component={Home} />
              <Route path='/questions/:id' component={QuestionDetails} />
              <Route path='/leaderboard' component={Leader} />
              <Route path='/add' component={NewQ} />
            </div>
          </div>
        </Fragment>
      </Router >
    )
  }

}
export default connect()(App)
