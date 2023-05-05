import styles from './employee_card.module.css';
import mrCollector from '../../../../assests/mrCollector.jpg';

import { useDispatch } from 'react-redux';
import { uiActions } from '../../../../store/ui_slice';

const EmployeeCard = (props) => {
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(uiActions.toggleAssigningEmployeeUI());
    }

    return (

        <div className={styles.card} onClick={clickHandler}>
            <div className={styles.card__img}>
                <img className={styles.card__img_preview} src={mrCollector} alt="Employee_Avatar" />
                <div className={styles.card__img_overlay}><span className={`${styles.badge} ${styles.badge_pill} ${styles.badge_danger}`}>Portrait</span> </div>
            </div>
            <div className={styles.card__content}>
                <div className={styles.card__header}>
                    <h2 className={styles.card__title}>{props.name}</h2>
                    <p className={styles.card__text}><i className="fa fa-map-marker" aria-hidden="true"></i> {props.role}</p>
                </div>
                <div className={styles.card__bottom}>
                    <div className={styles.options}>
                        <span className={styles.date}>
                            <i className={`${styles.fa} ${styles.fa_calendar}`} aria-hidden="true"></i> 9:00 - 17:00
                        </span>

                    </div>
                    <div className={styles.card__price}>
                        On Time
                    </div>
                </div>
            </div>
        </div>

    )
}
export default EmployeeCard;