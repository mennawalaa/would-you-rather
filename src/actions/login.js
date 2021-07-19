import { _getUsers } from '../_DATA.js'
//get user data (intial data)
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVEUSER = 'SAVEUSER'
export const USER = 'USER'
export const LOGOUT = 'LOGOUT'
export const receiveUsers = (users) => {
    // console.log("recever user action", users);
    return {
        type: RECEIVE_USERS,
        users
    }
}
export const saveUserAction = (user) => {
    return {
        type: SAVEUSER,
        user
    }
}
export const logoutAction = () => {
    return {
        type: LOGOUT,

    }
}


export const getAllUsersAction = () => async (dispatch) => {
    // console.log("welcome to getusersaction ");
    const response = await _getUsers();
    // console.log("users in getAllUsersAction", response);
    /* 
    _getUsers().then((users) => {
        console.log("users in getAllUsersAction", users);

    })
    */
    dispatch(receiveUsers(response))
    //  console.log("action after dispatch user value", receiveUsers.users);
}


