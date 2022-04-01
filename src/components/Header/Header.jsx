import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'
import { logout } from '../../redux/authReducer'
import {connect} from 'react-redux'

const Header = (props) => {


return (<header className={classes.header}>
      <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
    
    <div className={classes.loginBlock}>
      {props.isAuth ? <div>{props.login}<button className={classes.logout} onClick={props.logout} >Log out</button> </div> : 
      <NavLink to={'./login'} className={classes.link}>Sign in </NavLink>}
    </div>
    
    </header>)
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.data.isAuth
})

export default Header