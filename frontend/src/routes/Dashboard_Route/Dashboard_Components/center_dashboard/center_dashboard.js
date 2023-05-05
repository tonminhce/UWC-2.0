import React from "react";
import styles from "./center_dashboard.module.css";
import Centerbox from "./center_box/center_box";


import SearchBar from "../../../../components/UI/Bar_Collections/searchbar/searchbar";
import Bottombox from "./bottom_box/bottom_box";

const CenterDashboard = () => {
    return (
        <div className={styles.centerDashboard__grid}>
            <div className={styles.centerDashboard__content}>
                <SearchBar />
                <Centerbox />
                <Bottombox />
            </div>

        </div>
    )
};
export default CenterDashboard;