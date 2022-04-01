import classes from './Profile.module.css'
import MyPostsContainer from './My posts/MyPostsContainer'
import ProfileInfo from './ProfileInfo'




const Profile = (props) => {
    
    return (
        <div>
        
        <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
        <MyPostsContainer store={props.store} />
      </div>
    )
}

export default Profile