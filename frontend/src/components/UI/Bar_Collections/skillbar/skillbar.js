import React from 'react';
import styles from './skillbar.module.css'

const Skillbar = (props) => {
    return (
        <React.Fragment>
            <label className={styles.skill_label}>{props.label}</label>
            <div className={styles.skill_bar}>
                <div className={styles.level} style={{ width: props.value, backgroundColor: props.backgroundColor }}></div>
            </div>
        </React.Fragment>
    )
}
export default Skillbar;