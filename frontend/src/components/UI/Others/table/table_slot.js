import styles from "./table.module.css";

const Slot = (props) => {
    return (
        <tr>

            <td><input type="checkbox" value={props.data.isChecked} /></td>
            <td>{props.data.id}</td>
            <td>
                <div className={styles.td__location}>
                    {props.data.location}
                </div>
            </td>
            <td>{props.data.date}</td>
            <td>{props.data.amount}</td>
            <td className={styles.status}>
                <div className={props.data.status === "Complete" ? styles.td__status__green : props.data.status === "Processing" ? styles.td__status__yellow : styles.td__status__red}>
                    {props.data.status}
                </div>
            </td>
        </tr>
    );
}
export default Slot;