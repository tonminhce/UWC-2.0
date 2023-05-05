import React, { useRef } from "react";

import ReactDOM from "react-dom";
import styles from './SignInModal.module.css';

import useSignIn from "../../../../hooks/useSignIn";

import { useDispatch } from "react-redux";
import { uiActions } from "../../../../store/ui_slice";

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose} />;
}


const Modal = props => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const [data, HandleSignInData] = useSignIn({})

    const dispatch = useDispatch();

    const signUpToggle = (e) => {
        e.preventDefault();
        dispatch(uiActions.toggleSignUpUI());
        dispatch(uiActions.toggleSignInUI());
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        const userData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        dispatch(uiActions.toggleLoading());
        await HandleSignInData(userData)
        dispatch(uiActions.toggleLoading());
    }
    return (
        <div className={styles.modal__wrapper}>
            <form className={styles.modal__form} onSubmit={submitHandler}>
                <h2 className={styles.modal__form__header}>Login</h2>
                <input type="text" className={styles.modal__form__control} name="username" placeholder="Email Address" required="" autoFocus="" ref={emailRef} />
                <input type="password" className={styles.modal__form__control} name="password" placeholder="Password" required="" ref={passwordRef} />

                <a href="/#">Forgot Password?</a>

                <label className={styles.checkbox}>
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                </label>
                <button className={styles.modal__form__btn} type="submit">Login</button>
                <div className={styles.divider}></div>
                <button className={`${styles.modal__form__btn} ${styles.modal__form__create}`} onClick={signUpToggle} type="submit">Create An Account?</button>
            </form>
        </div>
    )
}

const SignInModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClick} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal onSubmit={props.onClick} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}
export default SignInModal;