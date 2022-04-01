import {applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware  from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducersBunch = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducersBunch, applyMiddleware(thunkMiddleware))
window.store = store
export default store