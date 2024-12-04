import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyStoredUsers from './pages/MyStoredUsers';
import User from '../../backend/Models/User';
import AllUsers from './pages/AllUsers';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="w-screen min-h-screen bg-[#f5f5f5]">
      <Navbar/>
      <Routes> 
         <Route path='/' element = {<Login/>}/>
         <Route path='/signin' element = {<Login/>}/>
          <Route path='/signup' element = {<SignUp/>}/>
          <Route path='/dashboard' element = {<Dashboard/>}/>
          <Route path='/myaddusers' element = {<MyStoredUsers/>}/>
          <Route path='/allusers' element = {<AllUsers/>}/>
          <Route path='/users/:userId' element = {<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
