import { QUSETIONDATA } from '../actions/question'

const initialState = {};

export const question = (state = initialState, action) => {
    switch (action.type) {
        case QUSETIONDATA:
            return {
                ...state,
                questiondata: action.question,
            }
        default:
            return state
    }
}