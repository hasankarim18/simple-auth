import React, { useContext } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MainHeader from './Components/MainHeader/MainHeader';
import AuthContext from './context/AuthContext';


function App(props) {

  const ctx = useContext(AuthContext)




  return (
    <React.Fragment>
      <MainHeader />
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <Home />}

    </React.Fragment>
  );
}

export default App;
