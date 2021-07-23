import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './NavBar'

class QusetionDetails extends Component {


    render() {

        let id = (this.props.location.pathname).substring(11);




        return (
            <div>

                {(this.props.questiondetails !== undefined) && (
                    <div className='card'>
                        <div>
                            <p className='auther'>{this.props.users[this.props.questiondetails.author].name}</p>
                            <img className='avatar' alt="problem in loading page" src={this.props.users[this.props.questiondetails.author].avatarURL} />
                        </div>
                        <div className='vip'>
                            <p className='center'>would you rather</p>

                            {this.props.questiondetails.optionOne.text}  {(this.props.yourVote !== "optionOne") && (<p className='vote'>your vote</p>)}
                            <p> votes for optionOne {this.props.questiondetails.optionOne.votes.length}</p>
                            <p>{((this.props.questiondetails.optionOne.votes.length) / 3).toFixed(2) * 100}%</p>
                            <progress max="5" value={this.props.questiondetails.optionOne.votes.length}></progress>

                            <br />

                            {this.props.questiondetails.optionTwo.text} {(this.props.yourVote !== "optionTwo") && (<p className='vote'>your vote</p>)}
                            <p>votes for optionTwo {this.props.questiondetails.optionTwo.votes.length}</p>
                            <p>{((this.props.questiondetails.optionTwo.votes.length) / 3).toFixed(2) * 100}%</p>
                            <progress max="5" value={this.props.questiondetails.optionTwo.votes.length}></progress>
                            <br />


                        </div>
                    </div>
                )}
                {((this.props.questiondetails === undefined) && (this.props.allquestions[id] !== undefined)) && (
                    <div className='card'>
                        <div>
                            <p className='auther'>{this.props.users[this.props.allquestions[id].author].name}</p>
                            <img className='avatar' alt="problem in loading page" src={this.props.users[this.props.allquestions[id].author].avatarURL} />
                        </div>
                        <div className='vip'>
                            <p className='center'>would you rather</p>

                            {this.props.allquestions[id].optionOne.text}  {(this.props.users[this.props.loggeduser].answers[id] !== "optionOne") && (<p className='vote'>your vote</p>)}
                            <p> votes for optionOne {this.props.allquestions[id].optionOne.votes.length}</p>
                            <p>{((this.props.allquestions[id].optionOne.votes.length) / 3).toFixed(2) * 100}%</p>
                            <progress max="5" value={this.props.allquestions[id].optionOne.votes.length}></progress>

                            <br />

                            {this.props.allquestions[id].optionTwo.text} {(this.props.users[this.props.loggeduser].answers[id] !== "optionTwo") && (<p className='vote'>your vote</p>)}
                            <p>votes for optionTwo {this.props.allquestions[id].optionTwo.votes.length}</p>
                            <p>{((this.props.allquestions[id].optionTwo.votes.length) / 3).toFixed(2) * 100}%</p>
                            <progress max="5" value={this.props.allquestions[id].optionTwo.votes.length}></progress>
                            <br />


                        </div>
                    </div>
                )}

                <NavBar />
            </div>
        )


    }
}
const mapStateToProps = (state) => {
    console.log("state to login component", state.login);
    console.log("user vote in question details", state.home.userVote)
    return {
        yourVote: state.home.userVote,
        questiondetails: state.question.questiondata,
        users: state.login.users,
        allquestions: state.home.questions,
        loggeduser: state.login.loggeduser,

    }
}


export default connect(mapStateToProps)(QusetionDetails)