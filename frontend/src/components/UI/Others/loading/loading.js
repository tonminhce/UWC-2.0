import styles from './loading.module.css'
import ReactDOM from "react-dom";
import React from 'react';

const Backdrop = () => {
    return <div className={styles.backdrop} />;
}


const Loading = () => {
    return (
        <div className={styles.loading__container}>
            <div className={styles.loading}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

const LoadingModal = () => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Loading />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}
export default LoadingModal