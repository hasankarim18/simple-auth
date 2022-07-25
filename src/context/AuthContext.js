import React, { useState, useEffect } from 'react'



const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    loginHandler: () => { },
    logoutHandler: () => { }
})


const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const loginHandler = (email, password) => {
        ///

        localStorage.setItem('isLoggedIn', '1')
        //
        setIsLoggedIn(true)
    }

    const logoutHandler = () => {
        // console.log('logout')
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
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                loginHandler: loginHandler,

            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext
export { AuthContextProvider }



