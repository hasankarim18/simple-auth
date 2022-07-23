import React, { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login'
import Home from './components/Home/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = (email, password) => {
    console.log(email, password)
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
  }

  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      {!isLoggedIn && <Login onLogin={loginHandler} />}

      {isLoggedIn && <Home />}


    </React.Fragment>
  );
}

export default App;
