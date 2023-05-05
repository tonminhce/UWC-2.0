import React from "react";
import styles from "./table.module.css";
import Slot from "./table_slot";

const DUMMY_DATA = [
    {
        key: 0,
        isChecked: false,
        id: "#INV/21/22/A4",
        location: "District 1",
        date: "12/01/2023",
        amount: "72",
        status: "Complete",
        option: "Detail"
    },
    {
        key: 1,
        isChecked: true,
        id: "#INV/21/22/A4",
        location: "District 4",
        date: "12/01/2023",
        amount: "72",
        status: "Full",
        option: "Detail"
    },
    {
        key: 2,
        isChecked: false,
        id: "#INV/21/22/A4",
        location: "District 7",
        date: "12/01/2023",
        amount: "72",
        status: "Processing",
        option: "Detail"
    },
    {
        key: 3,
        isChecked: false,
        id: "#INV/21/22/A4",
        location: "District 2",
        date: "12/01/2023",
        amount: "72",
        status: "Complete",
        option: "Detail"
    }

]

const Table = (props) => {
    return (
        <table>
            <tr className={styles.heading}>
                <th><input type="checkbox" /></th>
                <th>ID No.</th>
                <th>Location</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
            {DUMMY_DATA.map((data) => {
                return (
                    <Slot data={data} />
                );
            })
            }
        </table>
    );
}

export default Table;