import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getAllUsersAction, receiveUsers, saveUserAction, logoutAction } from '../actions/login'
import { getQuestionsAction } from '../actions/home'
import './index.css'

class Login extends Component {

    state = {
        id: ''
    }
    componentDidMount() {
        console.log("component did mount");
        this.props.getAllUsersAction();
        this.props.getQuestionsAction();
        this.props.logoutAction();


    }
    getUserId(e) {
        console.log("user id", e.target.value);
        //send the id to store state
        this.props.saveUserAction(e.target.value);
        this.setState({ id: e.target.value });
    }
    render() {
        console.log("props", this.props);
        if (this.props.users !== undefined) {
            let { users } = this.props.users;
        }
        return (
            <div className='container'>

                <h3>welcome</h3>
                <select onChange={e => this.getUserId(e)} className='dashboard-list' value="none">
                    <option value="none">i am...</option>
                    {(this.props.users !== undefined) && (
                        Object.keys(this.props.users).map((user, i) => (
                            <option key={i} value={this.props.users[user].id}>
                                {this.props.users[user].name}

                            </option>
                        ))
                    )

                    }
                </select>
                {/*the user didnt choose id yet he still can log to an empty pg error */}
                <button >
                    <Link to={`/Home/${this.state.id}`} >Login</Link>
                </button >
            </div>
        )
    }
}
// <Link to={`/Home/${this.props.users[user].id}`} >{this.props.users[user].name}</Link>
/* <img
                                    src={this.props.users[user].avatarURL}

                                    className='avatar'
                                />
                                */

const mapStateToProps = (state) => {
    console.log("state to login component", state.login);
    return {
        users: state.login.users,
        questions: state.home.questions,
        //   images: Object.keys(state.login.users.avatarURL)
    }
}

const mapDispatchToProps = {
    getAllUsersAction,
    receiveUsers,
    saveUserAction,
    getQuestionsAction,
    logoutAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)