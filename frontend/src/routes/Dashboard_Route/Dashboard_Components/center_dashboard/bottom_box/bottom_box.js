import React from "react";
import Table from "../../../../../components/UI/Others/table/table";
import styles from "./bottom_box.module.css";

const Bottombox = () => {
    return (
        <div className={styles.bottombox__container}>
            <div className={styles.bottombox__content}>
                <p>Current Tasks</p>
                <Table />
            </div>
        </div>
    )
}
export default Bottombox;