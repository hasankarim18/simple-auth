import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const initialState = {
    email: {
        value: '',
        isValid: null
    },
    password: {
        value: '',
        isValid: null
    }
}


const loginReducer = (state, action) => {
    switch (action.type) {
        case 'EMAIL_INPUT':
            return {
                ...state,
                email: {
                    value: action.payload,
                    isValid: action.payload.includes('@')
                }
            }
        case 'PASSWORD_INPUT':
            //  console.log(action.payload)
            return {
                ...state,
                password: {
                    value: action.payload,
                    isValid: action.payload.trim().length > 6
                }
            }
        case 'EMAIL_VALIDATOR':
            console.log('email validator')
            return {
                ...state,
                email: {
                    value: state.email.value,
                    isValid: state.email.isValid
                }
            }

        case 'PASSWORD_VALIDATOR':
            return {
                ...state,
                password: {
                    value: state.password.value,
                    isValid: state.password.isValid
                }
            }

        default:
            return state
    }

}



const Login = (props) => {

    const [formIsValid, setFormIsValid] = useState(false);
    const [LoginState, dispatcLogin] = useReducer(loginReducer, initialState)

    console.log(LoginState.email.isValid)
    console.log(LoginState.password.isValid)
    useEffect(() => {

        const formValid = setTimeout(() => {
            console.log('setformvalid')
            setFormIsValid(
                LoginState.email.isValid && LoginState.password.isValid
            )
        }, 600);

        return () => {
            console.log('CLENEUP')
            clearTimeout(formValid)
        }

    }, [LoginState.email.isValid, LoginState.password.isValid])

    const emailChangeHandler = (event) => {
        dispatcLogin({
            type: 'EMAIL_INPUT',
            payload: event.target.value
        })
    };

    const passwordChangeHandler = (event) => {
        dispatcLogin({
            type: 'PASSWORD_INPUT',
            payload: event.target.value
        })
    };

    const validateEmailHandler = () => {
        dispatcLogin({
            type: 'EMAIL_VALIDATOR'
        })
    };

    const validatePasswordHandler = () => {
        dispatcLogin({
            type: 'PASSWORD_VALIDATOR'
        })

    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(LoginState.email.value, LoginState.password.value);
    };
    //   console.log(LoginState.email.isValid)
    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${LoginState.email.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={LoginState.email.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${LoginState.password.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={LoginState.password.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
