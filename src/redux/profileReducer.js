import { userAPI, profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const GET_USER_STATUS = 'GET_USER_STATUS'


let initialState = {
    posts : [
        {
            id: 1,
            message: 'hi, how are you?',
            likesCount: 12
        },
        {
            id: 2,
            message: 'my first post',
            likesCount: 0
        }
      ],
      profile: null,
      status: ''
  }

const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_POST: {
        let newPost = {
            id: 5,
            message: action.newPostBody,
            likesCount: 0 
        }
        let newState = {...state,
        posts: [...state.posts]}
        if (action.newPostBody.trim().length === 0) return
        else {newState.posts.push(newPost)} 
                return newState; }      
    
        case SET_USER_PROFILE: {
            let stateCopy = {...state}
            stateCopy.profile = action.profile
            return stateCopy
        }
        case GET_USER_STATUS: {
            let stateCopy = {...state}
            stateCopy.status = action.status
            return stateCopy
        }

        default: return state;
        }  
        
  
}

export const  addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
    
  

 export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
 export const getUserStatusDispatch = (status) => ({type: GET_USER_STATUS, status})   
 export const getUserProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId)
          .then(response => {
              dispatch(setUserProfile(response.data))       
          })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then(response => {
            dispatch(getUserStatusDispatch(response.data))
        })
    }
}
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
            dispatch(getUserStatusDispatch(status))}
        })
    }
} 

export default profileReducer