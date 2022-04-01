import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav className={classes.nav}>
      <div className={classes.nav__link}>
        <NavLink to="/profile">Profile</NavLink>
        </div>
      <div className={classes.nav__link}><NavLink to="/dialogs">Messages</NavLink></div>
      <div className={classes.nav__link}><NavLink to="/users">Users</NavLink></div>
      <div className={classes.nav__link}><NavLink to="#">Music</NavLink></div>
      <div className={classes.nav__link}><NavLink to="#">Settings</NavLink></div>
    </nav>
    )
}

export default Nav