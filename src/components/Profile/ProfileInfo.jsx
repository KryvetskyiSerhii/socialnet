import classes from './Profile.module.css'
import Preloader from '../Common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if(!props.profile) {return <Preloader />}
    
    
    return (
        <div>
      <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' className={classes.back}></img>
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.small} alt="" />

        </div>
        <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
        </div>

    )

}

export default ProfileInfo