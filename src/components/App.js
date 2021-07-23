
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Home from './Home'
import QuestionDetails from './QuestionDetails'
import Leader from './Leader'
import NewQ from './NewQ'
import ErrorPage from './ErrorPage'
import ProtectedRoute from './protectedRoute'
import Pleaselogin from './Pleaselogin'


class App extends Component {

  render() {

    return (
      <Router>
        <Fragment>
          <div className='container'>
            <div>
              <Switch>
                <Route exact path='/' component={Login} />
                <ProtectedRoute exact path='/Home/:id' component={Home} loggedUser={this.props.loggeduser} />
                <ProtectedRoute exact path='/questions/:id' component={QuestionDetails} loggedUser={this.props.loggeduser} />
                <ProtectedRoute exact path='/leaderboard' component={Leader} loggedUser={this.props.loggeduser} />
                <ProtectedRoute exact path='/add' component={NewQ} loggedUser={this.props.loggeduser} />
                <ProtectedRoute exact path='/errorpage' component={ErrorPage} loggedUser={this.props.loggeduser} />
                <Route exact path='/pleaselogin' component={Pleaselogin} />
              </Switch>
            </div>
          </div>
        </Fragment>
      </Router>
    )
  }

}





const mapStateToProps = (state) => {
  return {
    loggeduser: state.login.loggeduser,
    questions: state.home.questions,

  }
}

export default connect(mapStateToProps)(App)
