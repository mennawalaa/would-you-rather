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
            showUnAnswerd: true,
            fromnewquestion: "from login",
            notansweredUpdated: [],
            answeredUpdated: []

        }
    }

    componentDidMount() {
        console.log("props in home", this.props);
        this.setState({ answeredUpdated: this.props.answeredquestions });
        //coming from home 
        this.setState({ notansweredUpdated: this.props.notanswered });
        if (this.props.location.state !== undefined) {
            //    console.log(" coming from login", this.props.all);
            //coming from nav bar
            if (this.props.location.state !== null) {
                //coming from new question 
                //    console.log("from nav bar", this.props.all);
                if (this.props.location.state.from) {
                    console.log("going to home from new question", this.props.location.state.from);
                    console.log("questions from new q", this.props.all);
                    this.setState({ fromnewquestion: "from home" });
                    console.log("the added question", this.props.addedq);
                    this.setState({ questionsUpdated: this.props.all });
                }

            }
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            console.log("props updated");
            console.log("prev questions", prevProps);
            console.log("the updated questions", this.props);

            this.props.notanswered.unshift(this.props.addedq);
            console.log("the not answered props after pushing the aded question", this.props.notanswered);
            this.setState({ notansweredUpdated: this.props.notanswered });
            this.setState({ answeredUpdated: this.props.answeredquestions });
        }
    }



    answered = () => {
        this.setState({ showAnswered: true })
        this.setState({ showUnAnswerd: false })
    }
    unanswered = () => {

        this.setState({ showAnswered: false })
        this.setState({ showUnAnswerd: true })

    }


    render() {

        // const Id = this.props.match.params.id


        const createSpace = () => {
            return <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        }
        let user = this.props.users[this.props.loggeduser];


        return (
            <div>

                {createSpace()}


                <div>
                    {((this.state.answeredUpdated !== undefined) && (this.state.showAnswered === true)) && (
                        this.state.answeredUpdated.map((item) => (
                            <div key={item.id}>
                                <AnsQuestion obj={item} vote={user.answers[item.id]} />
                            </div>
                        ))
                    )}
                </div>



                <div>
                    {((this.state.notansweredUpdated !== undefined) && (this.state.showUnAnswerd === true)) && (
                        this.state.notansweredUpdated.map((item) => (
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

const mapStateToProps = (state) => {
    let newarr = [];
    let oldarr = [];
    let unanswered = [];
    let answered = [];

    const changedState = state.home.questions;

    if (changedState !== undefined) {
        for (const question in changedState) {

            oldarr.push(changedState[question]);

        }

        newarr = oldarr.sort((a, b) => {
            return b.timestamp - a.timestamp
        })

        //// divide to answered and un answered

        let user = state.login.users[state.login.loggeduser];

        for (let i = 0; i < newarr.length; i++) {

            if (user.answers.hasOwnProperty(newarr[i].id)) {

                answered.push(newarr[i]);

            } else {
                unanswered.push(newarr[i]);
            }
        }
    }
    console.log("answered new approach", answered);
    console.log("unanswered new approach", unanswered);
    console.log("the added question in popsstate ", state.question.newunansweredq);
    return {
        users: state.login.users,
        answeredquestions: answered,
        notanswered: unanswered,
        loggeduser: state.login.loggeduser,
        all: state.home.questions,
        addedq: state.question.newunansweredq,


    }
}

const mapDispatchToProps = {
    getQuestionsAction,
    receiveQuestions,
    getAllUsersAction,
    receiveUsers
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)