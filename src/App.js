import './App.css';

import {Route, Link, Routes} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav'
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
       <div className='app-wrapper'>
      <HeaderContainer />
      <Nav />
      <div className="app-wrapper-content">
      <Routes>
      
        <Route path='/dialogs' element ={<DialogsContainer store={props.store} />} />
        <Route path='/profile/:userId' element ={<ProfileContainer store={props.store} />} />
        <Route path='/users' element ={<UsersContainer store={props.store} />} />
        <Route path='/login' element ={<Login store={props.store} />} />
      </Routes> 
      </div>
    </div>
   
  );
}

export default App;

