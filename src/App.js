import React, { useState } from 'react';
import './App.css';
import MainHeader from './Components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)



  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} />
    </React.Fragment>
  );
}

export default App;
