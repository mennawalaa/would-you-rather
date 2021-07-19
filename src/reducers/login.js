
import { RECEIVE_USERS, SAVEUSER, LOGOUT } from '../actions/login'
import { UPDATEUSER } from '../actions/home'
import { USERASKEDNEWQUESTION } from '../actions/newquestion'
const initialState = {};

export const login = (state = initialState, action) => {
    //  console.log("welcome to reducer function");
    switch (action.type) {
        case RECEIVE_USERS:
            //        console.log("action user in reducer", action.users)
            return {
                ...state,
                users: action.users,
            }
        case SAVEUSER:
            return {
                ...state,
                loggeduser: action.user,
            }
        case UPDATEUSER:
            console.log("how the state is viewed in the update user", state.users[action.authedUser].answers);
            let oldArr = state.users[action.authedUser].answers;
            //  let newArr=oldArr.concat({action.qid:action.userVote})
            oldArr[action.qid] = action.userVote
            console.log("array after adding a question item", oldArr);
            state.users[action.authedUser].answers = oldArr;
            let newState = state;
            return newState
        case USERASKEDNEWQUESTION:
            let oldstate = state.users[state.loggeduser].questions
            oldstate.push(action.newQuestion.id);
            state.users[state.loggeduser].questions = oldstate;
            let newstate = state;
            console.log("the new state am i right", newstate);
            return newstate
        case LOGOUT:
            return {
                ...state,
                loggeduser: null,
            }

        default:
            //      console.log("default");
            return state


    }

}
