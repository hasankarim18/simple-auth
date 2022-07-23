import React from 'react'
import Navigation from './Navigation'

const Header = (props) => {
    return (
        <div className="bg-dark mb-4" >
            <Navigation isLoggedIn={props.isLoggedIn} onLogout={props.onLogout} />
        </div>

    )
}

export default Header