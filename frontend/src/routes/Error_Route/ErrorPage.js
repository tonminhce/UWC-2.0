import React from "react";
import styles from './ErrorPage.module.css';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className={styles.oopss}>
            <div className={styles.error_text}>
                <span>404</span>
                <p>PAGE NOT FOUND</p>
                <p className={styles.hmpg}><Link to={"/"} className={styles.back}>Return</Link></p>
            </div>
        </div>
    );
};
export default ErrorPage;