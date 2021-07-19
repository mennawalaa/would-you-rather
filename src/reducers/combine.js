import { combineReducers } from 'redux'
import { login } from './login'
import { home } from './home'
import { question } from './question'

export const reds = combineReducers({
    login,
    home,
    question,
});