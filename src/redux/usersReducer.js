import {userAPI} from '../api/api'


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [

    ]

}




const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            let newState = {...state}
            newState.users = [...state.users]
            newState.users.map(user => 
                {
                    if (user.id === action.userId) {
                        user.followed = true
                    }
                })
                return newState
 
        }
        case UNFOLLOW: {
            let newState = {...state}
            newState.users = [...state.users]
            newState.users.map(user => 
                {
                    if (user.id === action.userId) {
                        user.followed = false
                    }
                })
                return newState
            
        }
        case SET_USERS: {
            let stateCopy = {...state}
            stateCopy.users = [...action.users]
            return stateCopy
        }
        case SET_CURRENT_PAGE: {
            let stateCopy ={...state}
            stateCopy.currentPage = action.currentPage
            return stateCopy
        }
        case SET_TOTAL_USERS_COUNT: {
            let stateCopy ={...state}
            stateCopy.totalUsersCount = action.totalUsersCount
            return stateCopy
        }
        case TOGGLE_ISFETCHING: {
            let stateCopy = {...state}
            stateCopy.isFetching = action.isFetching
            return stateCopy
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            let stateCopy = {...state, followingInProgress: action.followingInProgress ? 
                [...state.followingInProgress, action.userId] :
                state.followingInProgress.filter(id => id != action.userId)}
            return stateCopy
        }
        default: return state;
    }

}

export const followSuccess = (userId) =>  ({type: FOLLOW, userId })
export const unfollowSuccess= (userId) => ({type: UNFOLLOW, userId })
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_ISFETCHING, isFetching})
export const toggleIsFollowingProgress = (followingInProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId})


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
   
        userAPI.getUsers(currentPage, pageSize).then(data => {
              dispatch(toggleIsFetching(false))
              dispatch(setUsers(data.items))
              dispatch(setTotalUsersCount(data.totalCount))
              
          })          
  
}
}

export const follow = (userId) => {
    return (dispatch) => {
       dispatch(toggleIsFollowingProgress(true, userId))
       userAPI.followUser(userId)
             .then(data => {
          if(data.resultCode === 0) {
                dispatch(followSuccess(userId))   
       }
    dispatch(toggleIsFollowingProgress(false, userId))   
          })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        userAPI.unFollowUser(userId)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))  
                }
                dispatch(toggleIsFollowingProgress(false, userId))
})
    }
}

export default usersReducer