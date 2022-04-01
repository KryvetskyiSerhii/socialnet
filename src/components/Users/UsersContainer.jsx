import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers} from '../../redux/usersReducer'
import Preloader from '../Common/Preloader/Preloader'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux'


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }
  
  
      render() {
  
         
      return (
          <div><>
              {this.props.isFetching ? <Preloader /> : null}
              <Users totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize} currentPage={this.props.currentPage}
              onPageChanged={this.onPageChanged} users={this.props.users}
              follow={this.props.follow} unfollow={this.props.unfollow} 
              toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
              followingInProgress={this.props.followingInProgress}/>
              </>
          </div>
      )
  }
  
  }



let mapStateToProps = (state) => {
    return {
      users: state.users.users,
      pageSize: state.users.pageSize,
      totalUsersCount: state.users.totalUsersCount,
      currentPage: state.users.currentPage,
      isFetching: state.users.isFetching,
      followingInProgress: state.users.followingInProgress
    } 
  }
  
let mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsers,
  follow,
  unfollow
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
) (UsersContainer)
