import { _getQuestions } from '../_DATA.js'
import { _saveQuestionAnswer } from '../_DATA.js'
//get all questions
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const UPDATEQUESTIONSTATE = 'UPDATEQUESTIONSTATE'
export const VOTES = 'VOTES'
export const UPDATEUSER = 'UPDATEUSER'

export const receiveQuestions = (questions) => {
    // console.log("recever user action", questions);
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export const getQuestionsAction = () => async (dispatch) => {
    //   console.log("welcome to getquestions action ");
    const response = await _getQuestions();
    //   console.log("questions in getquestions action", response);

    dispatch(receiveQuestions(response))

}

export const receiveVotesAction = (answer, qid, authedUser) => {
    console.log("inputs to receiveVotesAction", authedUser, qid, answer);
    return {
        type: VOTES,
        answer,
        qid,
        authedUser,
    }

}
export const updateAnswerdQuestionsAction = (qid, userVote, authedUser) => {
    return {
        type: UPDATEQUESTIONSTATE,
        qid,
        userVote,
        authedUser,
    }
}
export const updateUserAction = (qid, userVote, authedUser) => {
    return {
        type: UPDATEUSER,
        qid,
        userVote,
        authedUser,
    }
}


export const saveuserAnswerAction = (authedUser, qid, ans) => async (dispatch) => {
    console.log("inside the saveuserAnswerAction");
    dispatch(receiveVotesAction(ans, qid, authedUser))
    // let answer = { [qid]: ans }
    const res = await _saveQuestionAnswer({
        authedUser,
        qid,
        answer: ans,
    })
    dispatch(updateAnswerdQuestionsAction(qid, ans, authedUser))
    dispatch(updateUserAction(qid, ans, authedUser))


}
