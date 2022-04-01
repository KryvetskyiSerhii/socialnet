import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";


let mapStateToPropsRedirect = (state) => {
    return {isAuth: state.auth.data.isAuth}
}

export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Navigate to={'/login'} />
            return <Component {...this.props} />
        }
    }
    
    let ConnectedRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

    return ConnectedRedirectComponent
}