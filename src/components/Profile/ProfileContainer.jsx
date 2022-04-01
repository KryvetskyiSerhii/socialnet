import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import {useMatch, Navigate} from 'react-router-dom'
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";





class ProfileContainer extends React.Component {
    
    componentDidMount () {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.loggedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }
    
    render () {
        
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>

            </div>
        )
    }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let mapStateToProps = (state) =>({
    profile: state.profile.profile,
    status: state.profile.status,
    loggedUserId: state.auth.data.userId,
    isAuth: state.auth.data.isAuth
})

let mapDispatchToProps = {
    getUserProfile,
    getUserStatus,
    updateUserStatus

}

const ProfileMatch = (props)=> {
    let match = useMatch('/profile/:userId')
    return (
        <AuthRedirectComponent {...props} match={match} />
    )
}



export default connect (mapStateToProps, mapDispatchToProps)(ProfileMatch)