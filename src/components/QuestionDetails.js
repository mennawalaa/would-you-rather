import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { receiveVotesAction } from '../actions/home'
import NavBar from './NavBar'

class QusetionDetails extends Component {
    /*
      componentDidMount() {
          this.props.receiveVotesAction();
      }
      */


    render() {
        console.log("coming props to question details", this.props);
        return (
            <div>

                {(this.props.questiondetails !== undefined) && (
                    <div className='card'>
                        <div>
                            <p className='auther'>{this.props.users[this.props.questiondetails.author].name}</p>
                            <img className='avatar' src={this.props.users[this.props.questiondetails.author].avatarURL} />
                        </div>
                        <div className='vip'>
                            <p className='center'>would you rather</p>

                            {this.props.questiondetails.optionOne.text}  {(this.props.yourVote !== "optionOne") && (<p className='vote'>your vote</p>)}
                            <progress max="5" value={this.props.questiondetails.optionOne.votes.length}></progress>
                            <br />

                            {this.props.questiondetails.optionTwo.text} {(this.props.yourVote !== "optionTwo") && (<p className='vote'>your vote</p>)}
                            <progress max="5" value={this.props.questiondetails.optionTwo.votes.length}></progress>
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
        //   images: Object.keys(state.login.users.avatarURL)
    }
}
/*
const mapDispatchToProps = {
                    receiveVotesAction

                }
                */

export default connect(mapStateToProps)(QusetionDetails)