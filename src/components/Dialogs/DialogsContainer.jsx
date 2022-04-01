import { addMessageActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect'
import { compose } from 'redux'




let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs.dialogs,
        messages: state.dialogs.messages,
        newMessage: state.dialogs.newMessage       
    }
}

let mapDispatchToProps = (dispatch) => {
return {
    createMessage: (newMessageBody) => {
        dispatch(addMessageActionCreator(newMessageBody))
    }
}
}


export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)