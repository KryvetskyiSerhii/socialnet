import classes from './Users.module.css'
import userPhoto from '../../assets/img/avatar.png'
import {NavLink} from 'react-router-dom'




const Users = (props) => {
    
    let pagesNumber = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages =[]
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i)
    }
    
    return (
        <div>
            <div>
                {pages.map( elem => {
                    return <span className={props.currentPage === elem  && classes.selectedPage}
                    onClick={() => {props.onPageChanged(elem)}} >{elem}</span>
                })}
            </div>
        {props.users.map(user => {return <div key={user.id} className={classes.block}> 
                <span>
                    <div className={classes.photo}>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !==null ? user.photos.small : userPhoto}></img>
                        </NavLink>
                    </div>
                    <div>
                        {!user.followed 
                        ? <button disabled={props.followingInProgress.some(id=> id === user.id)} 
                        onClick={()=>{ props.follow(user.id)
                            }}>Follow</button> 
                        : <button disabled={props.followingInProgress.some(id=> id === user.id)} 
                        onClick={()=>{props.unfollow(user.id)            
                            }}>Unfollow</button>}
                    </div>
                </span>
                <span className={classes.block__main}>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        {/* <div>{user.location.city}</div>
                        <div>{user.location.country}</div> */}
                    </span>
                </span>
                
                </div>})
            } 
        </div>
    )
}

export default Users