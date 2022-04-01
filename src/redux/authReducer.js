import { userAPI } from "../api/api"
import { stopSubmit } from "redux-form"


const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    data: {userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false    
}
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
           let stateCopy = {...state}
           stateCopy.data = action.data 
           return stateCopy
        }
        default: return state
    }
}

export const setAuthUserData =(userId, email, login, isAuth) => ({type: SET_USER_DATA,  
    data: {userId, email, login, isAuth}})

export const getAuthUserData = () => {
    return (dispatch) => {
        userAPI.loginUser().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            } 
         })


    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        userAPI.loginMe(email, password, rememberMe)
        .then(data => {
            if (data.data.resultCode === 0) {
               dispatch(getAuthUserData()) }
               else { 
                   let message = data.data.messages.length > 0 ? data.data.messages[0] : 'Some error'
                   dispatch(stopSubmit('Login', {_error: message}))
               }
            
        })
}
}

export const logout = () => {
    return (dispatch) => {
        userAPI.logoutMe()
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false)) }
        })
}
}

export default authReducer