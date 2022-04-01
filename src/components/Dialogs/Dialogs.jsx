import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'
import React from 'react'
import { Navigate } from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'
import { Textarea } from '../Common/FormsControls/FormsControls'
import { requiredField, maxLengthCreator } from '../../utils/validators/validators'

const Dialogs = (props) => {
  
    let addNewMessage = (values) => {
        props.createMessage(values.newMessageBody);
    }

    if(!props.isAuth) return <Navigate to={'/login'} />
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                {props.dialogs.map(element => {
                   return <DialogItem name={element.name} id={element.id} key={element.id} />
                })}
                
                
            </div>
            <div className={classes.messages}>
                {props.messages.map(element => {
                    return <Message message={element.message} key={element.id} />
                })}            
            </div>
           <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}
const maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props) => {
        
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
         <Field placeholder='Enter your message' name='newMessageBody' 
         value={props.newMessage} component ={Textarea} validate={[requiredField, maxLength100]} />
     </div>
     <div>
         <button >Send</button>
     </div>
     </form>
    )
}

const AddMessageFormRedux = reduxForm ({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs