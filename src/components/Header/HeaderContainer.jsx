import React from "react";
import Header from "./Header";
import { connect } from 'react-redux'
import { getAuthUserData, logout } from "../../redux/authReducer";


class HeaderContainer extends React.Component {

componentDidMount () {
    this.props.getAuthUserData()
}

    render() {
    return (
       <Header {...this.props}></Header> 
    )
}
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.data.isAuth,
    login: state.auth.data.login
})

const mapDispatchToProps = {
 getAuthUserData,
 logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)