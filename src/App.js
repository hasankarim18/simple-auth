import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login'
import Home from './components/Home/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = (email, password) => {
    console.log(email, password)

    const userEmail = email
    const userPassword = password

    if (userEmail && userPassword) {
      localStorage.setItem('loggedIn', '1')

    } else {
      localStorage.setItem('loggedIn', '0')
    }

    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
  }

  useEffect(() => {
    const checkLoggedIn = localStorage.getItem('loggedIn')

    if (checkLoggedIn === '1') {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }

  }, [])

  console.log('isLogged in', isLoggedIn)

  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      {!isLoggedIn && <Login onLogin={loginHandler} />}

      {isLoggedIn && <Home />}


    </React.Fragment>
  );
}

export default App;
