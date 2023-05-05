import styles from './Employee_Status.module.css'

import test from '../../../assests/test.webp'
const Employee_Status = (props) => {
    return (
        <div className={styles.bottomSlot__container}>
            <div className={styles.bottomSlot__profile}>
                <img src={test} alt="profile" />
                <div className={styles.bottomSlot__name}>
                    <h3>{props.name}</h3>
                    <p>{props.title}</p>
                    <div className={props.status === 'Available' ? styles.bottomSlot__status__green : styles.bottomSlot__status__red}>
                        {props.status}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Employee_Status;