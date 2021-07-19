import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutAction } from '../actions/login'

class NavBar extends Component {
    logout = () => {
        // this.props.logoutAction();
    }
    render() {
        const showNAv = () => {
            // console.log("goa el nav", this.props.users[this.props.loggeduser]);
            if (this.props.loggeduser !== undefined) {
                return (
                    <div className='menu-outer'>
                        <div className='table'>
                            <ul className='horizontal-list'>

                                <li>
                                    <NavLink to='/Home/:id' exact activeClassName='active'>
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/leaderboard' activeClassName='active'>
                                        leaderboard
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/add' activeClassName='active'>
                                        new question
                                    </NavLink>
                                </li>
                                <li>
                                    welcome <mark>{this.props.users[this.props.loggeduser].name}</mark>
                                </li>
                                <li>
                                    <NavLink to='/' activeClassName='active'>
                                        logout
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                )

            }

        }
        return (
            <div>
                {showNAv()}
            </div>
        )
    }


}
const mapStateToProps = (state) => {
    console.log("navbar1", state.login.users)
    console.log("navbar2", state.login.loggeduser)

    return {

        users: state.login.users,
        loggeduser: state.login.loggeduser,

    }
}
const mapDispatchToProps = {
    logoutAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);