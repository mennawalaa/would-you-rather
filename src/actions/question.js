export const QUSETIONDATA = 'QUSETIONDATA'

export const receiveQusetionAction = (question) => {
    // console.log("recever user action", users);
    return {
        type: QUSETIONDATA,
        question
    }

}