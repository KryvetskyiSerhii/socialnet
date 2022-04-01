import classes from './MyPosts.module.css'
import Post from './Post/Post' 
import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profileReducer';
import {reduxForm, Field} from 'redux-form'
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';


const MyPosts = (props) => {
  

  let addNewPost = (value) => {
    props.addPost(value.newPostBody)
  }

    return (
        <div className={classes.posts}>
         <h3>My posts</h3> 
         <MyPostFormRedux onSubmit={addNewPost} />
          
          {props.posts.map(post => <Post message={post.message} key={post.id} likes={post.likesCount}/>)}
          
          </div>
          
    )
}
const maxLength30 = maxLengthCreator(30)


const MyPostForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit} >
    <div>
        <Field  component={Textarea} name='newPostBody' validate={[requiredField, maxLength30]} placeholder='Enter your text'/>
         </div>
         <div>
             <button>Add post</button>
         </div>
  </form>
  )
}

const MyPostFormRedux = reduxForm ({form: 'addNewPost'})(MyPostForm)

export default MyPosts