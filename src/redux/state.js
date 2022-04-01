import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"

let store = {
     _state: {
        dialogs : {
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
              newMessageText: ''
        },
         
          profile : {
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
              newpost: ''
          }
         
    },
    _renderEntireTree() {},

subscribe (observer) {
    this._renderEntireTree = observer
},

getState() {
    return this._state
},

dispatch (action) {
this._state.profile = profileReducer(this._state.profile, action)
this._state.dialogs = dialogsReducer(this._state.dialogs, action)
this._renderEntireTree(this._state)
        
}
}


  


export default store