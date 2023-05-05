import React from "react";

import styles from './Messenger_Route.module.css';
import SearchBar from "../../components/UI/Bar_Collections/searchbar/searchbar";

//Components
import { IoMdArrowBack } from "react-icons/io";
import Switch from "../../components/UI/Others/switch/switch";

import { Link } from "react-router-dom";

import MessengerApp from "./Messenger_Main/Messenger_App";
//End Components


const MessengerRoute = () => {

    return (
        <div className={styles.route__container}>
            <header className={styles.route__header}>
                <div className={styles.logo_section}>
                    <Link to={"/dashboards"} className={styles.logo} >
                        <IoMdArrowBack size={40} color="#3944BC" />
                    </Link>
                </div>
                <div className={styles.header__center}>
                    <SearchBar />
                </div>
                <div className={styles.userInfo}>
                    <Switch />
                    <div className={styles.avatar}>

                    </div>
                </div>
            </header>
            <main>
                <MessengerApp />
            </main>

        </div>
    );
}

export default MessengerRoute;