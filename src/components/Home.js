import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestionsAction, receiveQuestions } from '../actions/home'
import { getAllUsersAction, receiveUsers } from '../actions/login'
import AnsQuestion from './AnsQuestion'
import UnAnsQuestion from './UnAnsQuestion'
import NavBar from './NavBar'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

            showAnswered: false,
            showUnAnswerd: true

        }
    }
    /*
    componentDidMount(prevProps) {
        //get the user id from the adress link
        //  if (this.props !== prevProps) {
        const answered = [];

        console.log(this.props.match.params.id);
        //get all users data
        //  this.props.getAllUsersAction();
        //get specific user data using id 
        //console.log("component did mount home call");
        //  this.props.getAllUsersAction()
        // console.log("users in home total", this.props.users);
        //   this.props.getQuestionsAction();
        //   console.log("all questions after getQuestionsAction(", this.props.questions);
        //get the unanswered questions
        const unanswered = [];
        const answered = [];
        let user = this.props.users[this.props.loggeduser];
        console.log("the specific user", user);
        console.log("all questions", this.props.questions);
        for (const i in this.props.questions) {
            console.log("i", i);
            console.log("each un answered question option", this.props.questions[i]);
            if (user.answers[i] === undefined) {
                console.log("this is an unswered question");
                unanswered.push(this.props.questions[i]);

            } else {
                answered.push(this.props.questions[i]);
            }
        }
        console.log("the un answered ttttttttttttt", unanswered);
        this.setState({ unansweredQ: unanswered });
        console.log("the unanswered ", this.state.unansweredQ);
        this.setState({ answeredQ: answered });
        console.log("the answered ", this.state.answeredQ);

        //   }
        */


    answered = () => {
        this.setState({ showAnswered: true })
        this.setState({ showUnAnswerd: false })
    }
    unanswered = () => {
        // console.log("data in side function", this.props.questions);
        // console.log("answered data", user.answers);
        this.setState({ showAnswered: false })
        this.setState({ showUnAnswerd: true })

    }


    render() {
        const Id = this.props.match.params.id
        //  console.log("my try id", Id);
        // console.log("data in home total", this.props.users[Id]);
        console.log("the user saved to the store", this.props.loggeduser);
        let user = this.props.users[this.props.loggeduser];
        console.log("my user", user);
        console.log("the answered render", this.props.answeredquestions);
        // console.log("questions", this.props.questions);
        return (
            <div>
                <br />
                <br />
                <br />
                <br />

                <div>
                    {((this.props.answeredquestions !== undefined) && (this.state.showAnswered === true)) && (
                        this.props.answeredquestions.map((item) => (
                            <div key={item.id}>
                                <AnsQuestion obj={item} vote={user.answers[item.id]} />
                            </div>
                        ))
                    )}
                </div>



                <div>
                    {((this.props.notanswered !== undefined) && (this.state.showUnAnswerd === true)) && (
                        this.props.notanswered.map((item) => (
                            <div key={item.id}>
                                <UnAnsQuestion obj={item} />
                            </div>
                        ))
                    )
                    }


                </div>
                <div >
                    <div className='table'>
                        <ul className='horizontal-list'>
                            <li><button className='btn' onClick={() => this.answered()}> answered</button></li>
                            <li> <button className='btn' onClick={() => this.unanswered()}>unanswered</button></li>
                        </ul>
                    </div>
                </div>
                <NavBar />

            </div>
        )

    }

}
//Object.keys(user.answers).map((answeredQ) => (
//  <div key={answeredQ}>
//    <AnsQuestion obj={this.props.answeredquestions} vote={user.answers[answeredQ]} />
// </div>
//))
// <UnAnsQuestion obj={this.props.questions[item]} />
//<Question id={answeredQ} />
const mapStateToProps = (state) => {
    let newarr = [];
    let oldarr = [];
    let unanswered = [];
    let answered = [];
    //  console.log("i want to see the state content", state);
    console.log("data to home users", state.login);
    console.log("data to home questions", state.home);
    console.log("data to home questions world spec", state.home.questions);

    // console.log("data from user", state.login);
    if (state.home.questions !== undefined) {
        for (let question in state.home.questions) {
            console.log("inside for loop", question);
            console.log("print each question", state.home.questions[question]);
            oldarr.push(state.home.questions[question]);

        }
        console.log("questions before sort", oldarr);
        newarr = oldarr.sort((a, b) => {
            return b.timestamp - a.timestamp
        })
        console.log("questions after sort", newarr);
        //// divide to answered and un answered

        let user = state.login.users[state.login.loggeduser];
        console.log("the logged user data", user);
        for (let i = 0; i < newarr.length; i++) {
            console.log("i", i);
            console.log("each un answered question ", newarr[i].id);
            if (user.answers.hasOwnProperty(newarr[i].id)) {
                console.log("if condition fulfil");
                console.log("this is an answered question", newarr[i]);
                answered.push(newarr[i]);

            } else {
                unanswered.push(newarr[i]);
            }
        }
    }
    console.log("answered new approach", answered);
    console.log("unanswered new approach", unanswered);
    return {
        users: state.login.users,
        answeredquestions: answered,
        notanswered: unanswered,
        loggeduser: state.login.loggeduser,
        //   images: Object.keys(state.login.users.avatarURL)
    }
}

const mapDispatchToProps = {
    getQuestionsAction,
    receiveQuestions,
    getAllUsersAction,
    receiveUsers
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)