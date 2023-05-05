import React from "react";

import styles from './center_box.module.css';
import { FcRating } from "react-icons/fc";
import Card from '../../../../../components/UI/Card_Collections/card/card'

import { useTranslation } from 'react-i18next';
import useCustomTranslate from "../../../../../hooks/useCustomTranslate";

import { useSelector } from "react-redux";




const Centerbox = () => {
    const user = useSelector(state => state.data.user.userName)
    useCustomTranslate()
    const { t } = useTranslation()

    return (
        <div className={styles.centerbox__container}>
            <div className={styles.centerbox__content}>
                <div className={styles.centerbox__content__upper}>
                    <p>{t("Overview")}</p>
                    <h1>{t("Hello")} {user ? user : "User"} <span><FcRating /></span></h1>
                </div>
                <div className={styles.centerbox__content__description}>
                    <Card title="Total Trucks" description="62" />
                    <Card title="Total MCPs" description="276" />
                </div>
            </div>
        </div>
    )
}
export default Centerbox;