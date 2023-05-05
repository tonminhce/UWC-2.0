import styles from './Modal.module.css';

const Modal = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                {props.children}
            </div>
        </div>
    );

}
export default Modal;