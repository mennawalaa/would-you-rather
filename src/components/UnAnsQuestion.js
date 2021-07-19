import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { receiveVotesAction, saveuserAnswerAction } from '../actions/home'
import { receiveQusetionAction } from '../actions/question'
import NavBar from './NavBar'

class UnAnsQuestion extends Component {
    constructor() {
        super();
        this.state = {
            showdetails: false,
            vote: ' ',
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    componentDidMount() {
        //modify the data base to include the user answer
        // this.props.saveuserAnswerAction(this.props.loggeduser, this.props.obj.id, "optionOne");
    }

    formSubmit = (event) => {
        event.preventDefault();
        console.log("what the event is in submit", event);
        console.log("recording your answer");
        console.log("the vote state", this.state.vote);
        this.setState({ vote: event.target.value });
        this.setState({ showdetails: true });
        this.props.receiveQusetionAction(this.props.obj);
        this.props.receiveVotesAction(this.props.loggeduser, this.props.obj.id, this.state.vote);
        console.log("saveuserAnswerAction");
        this.props.saveuserAnswerAction(this.props.loggeduser, this.props.obj.id, this.state.vote);




    }
    onValueChange(event) {
        console.log("you choose");
        console.log(event.target.value);
        this.setState({ vote: event.target.value });




    }

    render() {
        const showdetails = () => {
            return (

                setTimeout(() => {
                    <Redirect to={`/questions/${this.props.obj.id}`} />
                }, 3000)

            )
        }
        console.log("inside question", this.props.obj);

        return (
            <div>

                <div className='card'>
                    <div>
                        <p className='auther'>{this.props.users[this.props.obj.author].name}</p>
                        <img className='avatar' src={this.props.users[this.props.obj.author].avatarURL} />
                    </div>
                    <div className='vip'>
                        <p className='center'>would you rather</p>
                        <form onSubmit={this.formSubmit}>
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value="optionOne"
                                        checked={this.state.vote === "optionOne"}
                                        onChange={this.onValueChange}
                                    />
                                    {this.props.obj.optionOne.text}
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value="optionTwo"
                                        checked={this.state.vote === "optionTwo"}
                                        onChange={this.onValueChange}
                                    />
                                    {this.props.obj.optionTwo.text}
                                </label>
                            </div>

                            <button className='btn' type="submit">
                                Submit
                            </button>
                            {(this.state.showdetails === true) && (showdetails())}

                        </form>
                    </div>

                </div>
            </div>
        )
    }
}
/*
<Link to='/questions' >
                            <button className='btn' type="submit">
                                Submit
                            </button>
                        </Link>
 */
const mapStateToProps = (state) => {

    console.log("data to home", state.home);


    return {

        questions: state.home.questions,
        loggeduser: state.login.loggeduser,
        users: state.login.users,
        //   images: Object.keys(state.login.users.avatarURL)
    }
}
const mapDispatchToProps = {

    receiveVotesAction,
    receiveQusetionAction,
    saveuserAnswerAction,


}
export default connect(mapStateToProps, mapDispatchToProps)(UnAnsQuestion)

