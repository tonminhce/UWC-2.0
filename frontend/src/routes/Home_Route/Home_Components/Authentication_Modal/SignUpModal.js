import React from "react";

import ReactDOM from "react-dom";
import styles from './SignUpModal.module.css';

//custom hooks
import useSignUp from "../../../../hooks/useSignUp";


import { useRef } from "react";

import { useDispatch } from "react-redux";
import { uiActions } from "../../../../store/ui_slice";


const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose} />;
}
const Modal = props => {

    const dispatch = useDispatch();

    const userNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmedPasswordRef = useRef()
    const birthRef = useRef()
    const roleRef = useRef()

    const [data, HandleSignUpData] = useSignUp({})

    const submitHandler = async (e) => {
        e.preventDefault()
        const userData = {
            id: Math.random(),
            userName: userNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmedPassword: confirmedPasswordRef.current.value,
            birth: birthRef.current.value,
            role: roleRef.current.value,
        }
        dispatch(uiActions.toggleLoading());
        await HandleSignUpData(userData)
        dispatch(uiActions.toggleLoading());
    }

    const signInToggle = (e) => {
        e.preventDefault();
        dispatch(uiActions.toggleSignUpUI());
        dispatch(uiActions.toggleSignInUI());
    }

    return (
        <div className={styles.modal__wrapper}>
            <form className={styles.modal__form} onSubmit={submitHandler}>
                <h2 className={styles.modal__form__header}>Sign Up</h2>
                <input type="text" className={styles.modal__form__control} name="username" placeholder="Full Name?" required="" autofocus="" ref={userNameRef} />
                <input type="text" className={styles.modal__form__control} name="email" placeholder="Enter Email Address?" required="" autofocus="" ref={emailRef} />
                <input type="date" className={`${styles.modal__form__control} ${styles.modal__form__date}`} name="birthday" placeholder="Birthdate?..." required="" autofocus="" ref={birthRef} />
                <input type="password" className={styles.modal__form__control} name="password" placeholder="Enter Password?" required="" ref={passwordRef} />
                <input type="password" className={styles.modal__form__control} name="password-confirm" placeholder="Confrim Password" required="" ref={confirmedPasswordRef} />
                <select className={`${styles.modal__form__control} ${styles.modal__form__options}`} name="option" id="option" required="" ref={roleRef}>
                    <option value={null}>What is your position?</option>
                    <option value="Collector">Collector</option>
                    <option value="Janitor">Janitor</option>
                    <option value="Admin">Admin</option>
                </select>


                <button className={styles.modal__form__btn} type="submit">Sign Up</button>
                <div className={styles.divider}></div>
                <button className={`${styles.modal__form__btn} ${styles.modal__form__create}`} onClick={signInToggle} type="submit">Login</button>
            </form>
        </div>
    )
}

const SignUpModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClick} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal onSubmit={props.onClick} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}
export default SignUpModal;