import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveVotesAction } from '../actions/home'
import { receiveQusetionAction } from '../actions/question'
import { Link } from 'react-router-dom';


class AnsQuestion extends Component {
    state = {
        viewpull: false
    }
    viewData = (vote, question) => {

        this.props.receiveVotesAction(vote, this.props.obj.id, this.props.loggeduser);
        this.props.receiveQusetionAction(question);
        this.setState({ viewpull: true });

    }
    render() {

        //props called when ansquestion called at home 
        console.log("obj", this.props.obj);
        console.log("vote", this.props.vote);
        //what should be shown would you rather ,option one ,option two , auther ,viewpul button

        return (

            <div>


                <div className='card'>
                    <div>
                        <p className='auther'>{this.props.users[this.props.obj.author].name}</p>
                        <img className='avatar' alt="problem in loading page" src={this.props.users[this.props.obj.author].avatarURL} />
                    </div>
                    <div className='vip'>
                        <p className='center'>would you rather {this.props.obj.timestamp}</p>
                        {this.props.obj.optionOne.text}   {(this.props.vote === 'optionOne') && 'your vote'}
                        <br />
                        or
                        <br />
                        {this.props.obj.optionTwo.text}   {(this.props.vote === 'optionTwo') && 'your vote'}

                        <br />
                        <Link to={`/questions/${this.props.obj.id}`} >

                            <button className='btn' onClick={() => this.viewData(this.props.vote, this.props.obj)}>view pull</button>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    //  console.log("data to home", state.home);


    return {

        questions: state.home.questions,
        loggeduser: state.login.loggeduser,
        users: state.login.users,


    }
}


const mapDispatchToProps = {

    receiveVotesAction,
    receiveQusetionAction,


}
export default connect(mapStateToProps, mapDispatchToProps)(AnsQuestion)
