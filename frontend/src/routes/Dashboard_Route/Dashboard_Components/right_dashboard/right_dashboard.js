import styles from './right_dashboard.module.css';

import { uiActions } from '../../../../store/ui_slice';

import { useDispatch, useSelector } from 'react-redux';

import { FaUserTie } from 'react-icons/fa'
import { BsBellFill } from 'react-icons/bs'
import RightCenter from './right_centerbox/right_center';
import RightBottom from './right_bottombox/right_bottom';

const RightDashboard = () => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.data.user.userName)

    const toggleModalHandler = () => {
        dispatch(uiActions.toggleSignInUI());
    }
    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " "
        + currentdate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    return (
        <div className={styles.right_dashboard__grid}>

            <div className={styles.right_dashboard__content}>
                <div className={styles.right_dashboard__content__upperbox}>
                    <div className={styles.right_dashboard__time}>{userName ? userName : datetime}</div>
                    <div className={styles.right_dashboard__icon}> <BsBellFill /></div>
                    <div className={styles.right_dashboard__icon} onClick={toggleModalHandler}><FaUserTie /></div>
                </div>
                <RightCenter />
                <RightBottom />
            </div>
        </div>
    )
}
export default RightDashboard;