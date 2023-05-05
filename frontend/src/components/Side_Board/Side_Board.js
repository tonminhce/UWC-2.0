import styles from './Side_Board.module.css';
import logo from '../../assests/logo.png'

//ICON//
import { MdDashboard, MdOutlineAnalytics, MdOutlineExitToApp } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
//ICON END//

import Switch from "../UI/Others/switch/switch";
//i18next//
import useCustomTranslate from '../../hooks/useCustomTranslate'
import { useTranslation } from 'react-i18next'


//Firebase
import storage from "../../store/redux";
import { uiActions } from "../../store/ui_slice";
import { signOut } from "firebase/auth";
import { auth } from "../../services/config";


import { Link } from 'react-router-dom'

const signOutHandler = () => {
    if (!auth.currentUser) return
    storage.dispatch(uiActions.toggleLoading())
    signOut(auth).then(() => {
        storage.dispatch(uiActions.toggleLoading())
        storage.dispatch(uiActions.toggleNotification({
            title: "Sign Out Successful",
            message: "See you again !"
        }))
    }).catch((error) => {
        storage.dispatch(uiActions.toggleLoading())
        storage.dispatch(uiActions.toggleNotification({
            title: "Sign Out Failed",
            message: "Error: " + error.message.slice(error.message.indexOf("/") + 1, error.message.indexOf(")")).toUpperCase().replace(/-/g, ' ')//regex expression
        }))
    })
}


const SideBar = () => {
    useCustomTranslate()

    const { t } = useTranslation()


    return (
        <div className={styles.leftboard_grid}>
            <div className={styles.leftboard_grid__item}>
                <div className={styles.leftboard__header}>
                    <img src={logo} className={styles.leftboard__header__logo} alt='Logo'></img>
                    <h1 className={styles.leftboard__header__title}>UWC</h1>
                </div>
                <div className={styles.leftboard__body}>
                    <p className={styles.leftboard__body__title}>{t('Administration')}</p>
                    <div className={styles.leftboard__body__item}> <i className={styles.leftboard__body__item__icon}><MdDashboard /></i> <span className={styles.leftboard__body__item__text}><Link to={"/dashboards"}>{t('Dashboard')}</Link></span> </div>
                    <div className={styles.leftboard__body__item}> <i className={styles.leftboard__body__item__icon}><MdOutlineAnalytics /></i> <span className={styles.leftboard__body__item__text}><Link to={"/dashboards/map"}>{t("Maps")}</Link></span> </div>
                    <div className={styles.leftboard__body__item}> <i className={styles.leftboard__body__item__icon}><FiTruck /></i> <span className={styles.leftboard__body__item__text}><Link to={"/dashboards/vehicles"}>{t("Vehicles")}</Link></span> </div>
                    <div className={styles.leftboard__body__item}> <i className={styles.leftboard__body__item__icon}><BsPeopleFill /></i> <span className={styles.leftboard__body__item__text}><Link to={"/dashboards/employees"}>{t("Employees")}</Link></span> </div>
                    <div className={styles.leftboard__body__item}> <i className={styles.leftboard__body__item__icon}><MdOutlineExitToApp /></i> <span className={styles.leftboard__body__item__text} onClick={signOutHandler}><a href="/#">{t("Checkout")}</a></span> </div>

                </div>
                <div className={styles.leftboard__footer}>
                    <p className={styles.leftboard__footer__title}>{t("Settings")}</p>
                    <div className={styles.leftboard__footer__item}> <i className={styles.leftboard__footer__item__icon}><FaUser /></i> <span className={styles.leftboard__footer__item__text}><Link to="/dashboards/profile">{t("Profile")}</Link></span> </div>
                    <div className={styles.leftboard__footer__item}> <i className={styles.leftboard__footer__item__icon}><AiOutlineMail /></i> <span className={styles.leftboard__footer__item__text}><Link to="/dashboards/messengers">{t("Message")}</Link></span> </div>
                </div>
                <Switch />
            </div>
        </div>
    )
}
export default SideBar;