import { _saveQuestion } from '../_DATA.js'
export const RECEIVE_NEWQ_DATA = 'RECEIVE_NEWQ_DATA'
export const ADDQUESTION = 'ADDQUESTION'
export const USERASKEDNEWQUESTION = 'USERASKEDNEWQUESTION'

export const receiveNewQuestionData = (author, option1, option2) => {
    // console.log("recever user action", questions);
    return {
        type: RECEIVE_NEWQ_DATA,
        author,
        option1,
        option2,
    }
}
export const addQuestionAction = (newQuestion) => {
    return {
        type: ADDQUESTION,
        newQuestion,
    }
}
export const addQuestiontouserAction = (newQuestion) => {
    return {
        type: USERASKEDNEWQUESTION,
        newQuestion,
    }
}

export const saveQuestionAction = (optionOneText, optionTwoText, author) => async (dispatch) => {
    console.log("input data in new question action", optionOneText, optionTwoText);

    const res = await _saveQuestion({ optionOneText, optionTwoText, author });
    console.log("the new question in action", res);

    dispatch(addQuestionAction(res));
    dispatch(addQuestiontouserAction(res));
}

