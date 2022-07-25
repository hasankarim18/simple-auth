import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/AuthContext';

const emailInitialState = {
    value: '',
    isValid: null
}

const emailReducer = (state, action) => {
    switch (action.type) {
        case 'USER_INPUT':
            //  console.log(action.payload)
            return {
                ...state,
                value: action.payload,
                isValid: action.payload.includes('@')
            }
        case 'INPUT_BLUR':
            return {
                ...state,
                value: state.value,
                isValid: state.value.includes('@')
            }

        default:
            return state;
    }
}

const InitialasswordState = {
    value: '',
    isValid: null
}

const passwordReducer = (state, action) => {
    switch (action.type) {
        case 'PASSWORD_INPUT':
            return {
                ...state,
                value: action.payload,
                isValid: action.payload.trim().length > 6
            }
        case 'PASSWORD_IS_VALID':
            return {
                ...state,
                value: state.value,
                isValid: state.value.trim().length > 6
            }
        default:
            return state
    }

}

const Login = (props) => {

    const ctx = useContext(AuthContext)


    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, emailInitialState)
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, InitialasswordState)

    const { isValid: emailIsValid } = emailState
    const { isValid: passwordisValid } = passwordState



    useEffect(() => {
        const setForm = setTimeout(() => {
            // console.log('setform')
            setFormIsValid(
                emailState.isValid && passwordState.isValid
            )
        }, 500);

        return () => {
            // console.log('CLENE_UP')
            clearInterval(setForm)
        }

    }, [emailIsValid, passwordisValid])


    const emailChangeHandler = (event) => {
        dispatchEmail({
            type: 'USER_INPUT',
            payload: event.target.value
        })


    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({
            type: 'PASSWORD_INPUT',
            payload: event.target.value
        })

    };

    const validateEmailHandler = () => {
        dispatchEmail({
            type: 'INPUT_BLUR',
        })
    };

    const validatePasswordHandler = () => {

        dispatchPassword({
            type: 'PASSWORD_IS_VALID'
        })
    };

    const submitHandler = (event) => {
        event.preventDefault();
        //     props.onLogin(emailState.value, passwordState.value);
        ctx.loginHandler(emailState.value, passwordState.value)
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
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
