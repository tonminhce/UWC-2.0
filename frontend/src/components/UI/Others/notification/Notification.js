import styles from './Notification.module.css';



const Notification = (props) => {
    return (
        <div className={styles.notification}>
            <div className={styles.notification__content}>
                <h2 className={styles.notification__content__header}>{props.title} !</h2>
                <p className={styles.notification__content__message}>{props.message}</p>
                <button className={styles.notification__content__btn} onClick={props.onClick}>Got It!</button>
            </div>
        </div>
    )
}
export default Notification;