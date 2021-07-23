import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './NavBar';


class Leader extends Component {
    render() {
        //  console.log("props in leader board", this.props);
        //   console.log("the contents of the adress bar in leader", window.location.href);
        /*
        if (this.props.users !== undefined) {
            var sorted = [];
            for (const user in this.props.users) {
                console.log("cal qu score", user, this.props.users[user].questions.length);
                console.log("cal ans score", user, Object.keys(this.props.users[user].answers).length);
                console.log("their sum", (this.props.users[user].questions.length) + (Object.keys(this.props.users[user].answers).length));
            }
        }
        */
        return (
            <div>
                <div >

                    <p className='center'> leaderboard </p>
                    <br />
                    <div >
                        {(this.props.users !== undefined) && (
                            this.props.users.map((user) => (
                                <div key={user.name}>

                                    <p className='active'>{user.name}</p>

                                    <img className='avatar'
                                        alt="problem in loading page"
                                        src={user.avatarURL} />

                                    <p>asked {user.questionsScore}</p>

                                    <p>answered {user.answersScore}</p>

                                </div>
                            ))
                        )}
                    </div>
                    <NavBar />
                </div>
            </div>
        )
    }


}
const mapStateToProps = (state) => {

    if (state.login !== undefined) {
        var sorted = [];
        for (const user in state.login.users) {
            //   console.log("cal qu score", user, state.login.users[user].questions.length);
            // console.log("cal ans score", user, Object.keys(state.login.users[user].answers).length);
            //   console.log("their sum", (state.login.users[user].questions.length) + (Object.keys(state.login.users[user].answers).length));
            //add a question score property
            state.login.users[user].questionsScore = state.login.users[user].questions.length;
            // add an answer score property
            state.login.users[user].answersScore = Object.keys(state.login.users[user].answers).length;
            //add a total score property (add the two previous steps)
            state.login.users[user].totalScore = (state.login.users[user].questions.length) + (Object.keys(state.login.users[user].answers).length)
            sorted.push(state.login.users[user]);
        }
        //  console.log("3yza ashof sorted", sorted);
        let news = sorted.sort((a, b) => {
            //    console.log("the sort function inside");
            //  console.log("a", a);
            //   console.log("b", b);
            return b.totalScore - a.totalScore
        })
        // console.log("the sorted", sorted);
        news.forEach((e) => {
            console.log(`${e.id} ${e.totalScore} `);
        });
    }

    //console.log("state to login component", state.login);
    return {
        users: sorted,


    }
}
export default connect(mapStateToProps)(Leader)
