const ADD_MESSAGE = 'ADD-MESSAGE'


let initialDialogs = {
    dialogs : [
        {
            id: 1,
            name: 'Sam'
        },
        {
            id: 2,
            name: 'John'
        },
        {
            id: 3,
            name: 'Mary'
        },
        {
            id: 4,
            name: 'Bob'
        },
      ],
      
      messages : [
        {
            id: 1,
            message: 'hi'
        },
        {
            id: 2,
            message: 'hello'
        },
        {
            id: 3,
            message: 'how are you?'
        },
      ],
}

const dialogsReducer = (state = initialDialogs, action) => {
    
    switch(action.type) { 
         
    case ADD_MESSAGE:  {  
    let newMessage = {
            id: 5,
            message: action.newMessageBody 
        }
        let newState ={...state,
        messages: [...state.messages] }
        if (action.newMessageBody.trim().length === 0) return
        else {newState.messages.push(newMessage)}      
            return newState;
        }
    default: return state;
}
    
}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})


export default dialogsReducer