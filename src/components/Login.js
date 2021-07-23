import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsersAction, receiveUsers, saveUserAction, logoutAction } from '../actions/login'
import { getQuestionsAction } from '../actions/home'
import { Redirect } from 'react-router-dom'
import './index.css'


class Login extends Component {

    state = {
        id: '',
        shownext: false
    }
    componentDidMount() {
        console.log("props in login page", this.props);
        //if (this.props.history.action === "POP") {
        console.log("first time to enter application");
        this.props.getAllUsersAction();
        this.props.getQuestionsAction();
        this.props.logoutAction();

        //}


    }
    getUserId(e) {
        //  console.log("user id", e.target.value);
        //send the id to store state
        this.props.saveUserAction(e.target.value);
        this.setState({ id: e.target.value });
    }
    tonextpage() {
        console.log("show next");
        this.setState({ shownext: true })

    }



    render() {

        const nextRoute = () => {
            if (this.state.shownext === true) {
                console.log("error page function call");
                //we need to idenify weather it starts form login or logout or as result of type on adress bar
                //try action history .action="pop"
                //starts form login 
                //try action history .action ="REPLACE"
                //writing question undefined in home
                //try action history .action ="REPLACE"\
                //try action history .action="push"
                //starts form login after logout

                if (this.props.history.action === "POP" || this.props.history.action === "PUSH") {
                    console.log("starting or coming from logout ");
                    return <Redirect to={`/Home/${this.state.id}`}

                    />

                } else if (this.props.history.action === "REPLACE") {
                    console.log("type something to adress bar ");
                    console.log("the destination value", this.props.location.state.frompleaselogin.state.from.pathname);
                    if (this.props.location.state.frompleaselogin.state.from.pathname === '/questions/undefined') {
                        return <Redirect to='/errorpage' />
                    } else {

                        return <Redirect to={`${this.props.location.state.frompleaselogin.state.from.pathname}`}

                        />

                    }
                }
            }
        }





        /*
        if (this.props.users !== undefined) {
            let { users } = this.props.users;
        }
        */
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
                {/*the user didnt choose id yet he still can log to an empty pg error*/}

                <button onClick={() => this.tonextpage()}>login</button>
                {nextRoute()}



            </div>
        )
    }
}


const mapStateToProps = (state) => {
    //   console.log("state to login component", state.login);
    return {
        users: state.login.users,
        questions: state.home.questions,

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