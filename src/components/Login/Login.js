import React, { useState } from 'react'
import classes from './Login.module.css'



const Login = (props) => {
    const [email, setEamil] = useState('')
    const [password, setPassword] = useState('')
    const [isEmailValid, setIsemailValid] = useState()
    const [isPasswordValid, setPasswordValid] = useState()
    const [isFormValid, setIsFormValid] = useState(false)

    const emailChangeHandler = (event) => {
        setEamil(event.target.value)
        setIsFormValid(
            event.target.value.includes('@') && password.trim().length > 5
        )
    }

    const passwordChangeHandler = event => {
        setPassword(event.target.value)
        setIsFormValid(
            event.target.value.trim().length > 5 && email.includes('@')
        )


        setPasswordValid(password.trim().length > 5)
    }

    const validateEmailHandler = () => {
        setIsemailValid(email.includes('@'))
    }

    const validatePasswordHandler = () => {
        setPasswordValid(password.trim().length > 5)
    }

    const submitHandler = event => {
        event.preventDefault()
        props.onLogin(email, password)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-11 col-sm-10 col-md-9 col-lg-8">
                    <div className="p-2 pt-5 pb-5 border border-primary rounded">
                        <form onSubmit={submitHandler} >
                            <div className={`${classes.control} ${isEmailValid === false ? classes.invalid : ''
                                }`} >
                                <label>Email</label>
                                <input
                                    value={email}
                                    onChange={emailChangeHandler}
                                    className=""
                                    type="text"
                                    onBlur={validateEmailHandler}
                                />
                            </div>
                            <br />
                            <div className={`${classes.control} ${isPasswordValid === false ? classes.invalid : ''
                                }`} >
                                <label>Password</label>
                                <input
                                    onChange={passwordChangeHandler}
                                    value={password}
                                    className=""
                                    onBlur={validatePasswordHandler}
                                    type="text" />
                            </div>
                            <br />
                            <div>
                                <button
                                    disabled={!isFormValid}
                                    className="btn btn-success"
                                >Login </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login