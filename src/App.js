import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MainHeader from './Components/MainHeader/MainHeader';
import AuthContext from './context/AuthContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = (email, password) => {
    ///
    localStorage.setItem('isLoggedIn', '1')
    //
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  const sotredUserLoggedInInformation = localStorage.getItem('isLoggedIn')

  useEffect(() => {
    if (sotredUserLoggedInInformation === '1') {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn
      }}
    >
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </AuthContext.Provider >
  );
}

export default App;
