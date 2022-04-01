
import { addPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    newpost: state.profile.newpost
  } 
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostBody) => {
      dispatch(addPostActionCreator(newPostBody)) },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer