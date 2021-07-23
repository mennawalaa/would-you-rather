import { QUSETIONDATA } from '../actions/question'
import { ADDUNASNWEREDQ } from '../actions/newquestion'

const initialState = {};

export const question = (state = initialState, action) => {
    switch (action.type) {
        case QUSETIONDATA:
            return {
                ...state,
                questiondata: action.question,
            }
        case ADDUNASNWEREDQ:
            console.log("the added question in reducer", action.newquestion);
            return {
                ...state,
                newunansweredq: action.newquestion,
            }
        default:
            return state
    }
}