import { RECEIVE_QUESTIONS, UPDATEQUESTIONSTATE, VOTES } from '../actions/home'
import { ADDQUESTION } from '../actions/newquestion'

const initialState = {};
/*
updatequestion = (state, answer, qid, user) => {
    const pos1 = state.questions[qid].optionOne.votes;
    const pos2 = state.questions[qid].optionTwo.votes;
    if (answer === "optionOne") {
        state.questions[qid].optionOne.votes.concat(user);
        console.log("the new state if optionone", state);
    } else {
        state.questions[qid].optionTwo.votes.concat(user);
        console.log("the new state if optionTwo", state);
    }
    return state
}
*/

export const home = (state = initialState, action) => {
    // console.log("welcome to reducer at home function");
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            //  console.log("action user in reducer", action.questions)
            return {
                ...state,
                questions: action.questions,
            }
        case VOTES:
            return {
                ...state,
                userVote: action.answer,
            }

        case UPDATEQUESTIONSTATE://this state only has the uservote option errorr
            console.log("the state inside the reducer vote", state);
            console.log("action answer", action.userVote);
            if (action.userVote === "optionOne") {
                let oldarr = state.questions[action.qid].optionOne.votes
                let newarr = oldarr.concat(action.authedUser);
                state.questions[action.qid].optionOne.votes = newarr;
                console.log("the new state if optionone", state);
            } else {
                state.questions[action.qid].optionTwo.votes.concat(action.authedUser);
                let oldarr = state.questions[action.qid].optionTwo.votes
                let newarr = oldarr.concat(action.authedUser);
                state.questions[action.qid].optionTwo.votes = newarr;
                console.log("the new state if optionTwo", state);

            }
            let newState = state
            return newState
        case ADDQUESTION:
            console.log("the state in add question reducer", state);
            state.questions[action.newQuestion.id] = action.newQuestion;
            console.log("57");
            let newstate = state;
            console.log("the state in reducer after adding new question", newstate);
            return newstate

        default:
            //  console.log("default");
            return state


    }

}
/*
case VOTES:
            return {
                ...state,
                userVote: action.answer,
            }
*/
/*
updatequestion = (state, answer, qid, user) => {
    const pos1 = state.questions[qid].optionOne.votes;
    const pos2 = state.questions[qid].optionTwo.votes;
    if (answer === "optionOne") {
        state.questions[qid].optionOne.votes.concat(user);
        console.log("the new state if optionone", state);
    } else {
        state.questions[qid].optionTwo.votes.concat(user);
        console.log("the new state if optionTwo", state);
    }
    return state
}
*/
/* mn bab el7tyate
   ...state,
                questions: {
                    ...state.questions[action.qid],
                    optionOne: action.answer === "optionOne" ? {
                        ...state.questions[action.qid].optionOne.votes.concat(action.authedUser)
                    } : state.questions,
                    optionTwo: action.answer === "optionTwo" ? {
                        ...state.questions[action.qid].optionTwo.votes.concat(action.authedUser)
                    } : state.questions
                }
 */