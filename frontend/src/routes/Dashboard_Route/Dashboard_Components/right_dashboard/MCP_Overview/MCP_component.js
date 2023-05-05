import styles from './MCP_component.module.css';
import ReactDOM from "react-dom";
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Skillbar from '../../../../../components/UI/Bar_Collections/skillbar/skillbar';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose} />;
}
const Modal = props => {
    const percentage1 = 66;
    const percentage2 = 78;
    const percentage3 = 90;
    return (
        <div className={styles.modal__wrapper}>
            <div className={styles.modal__header}>
                <h1 className={styles.modal__title}>MCP Overview</h1>
                <div className={styles.modal__close} onClick={props.onClose}>X</div>
            </div>
            <div className={styles.progressbar__wrapper}>
                <div className={styles.progress}>
                    <CircularProgressbar
                        value={percentage1}
                        text={`${percentage1}%`}
                        styles={buildStyles({
                            textColor: "#f9ccca",

                            pathColor: "#ffb43e",
                        })}
                    />
                    <div className={styles.progress_info}>
                        <h1 className={styles.progress_title}>Sector 1</h1>
                        <div className={styles.progress_status}>
                            <Skillbar label="Plastic/Paper" value="66%" backgroundColor="red" />
                            <Skillbar label="Metal" value="26%" backgroundColor="red" />
                            <Skillbar label="Waste" value="8%" backgroundColor="red" />
                        </div>
                        <div className={styles.btn}>Focus</div>
                    </div>
                </div>
                <div className={styles.progress}>
                    <CircularProgressbar
                        value={percentage2}
                        text={`${percentage2}%`}
                        styles={buildStyles({
                            textColor: "#f9ccca",
                            pathColor: "#ffb43e",
                        })}
                    />
                    <div className={styles.progress_info}>
                        <h1 className={styles.progress_title}>Sector 2</h1>
                        <div className={styles.progress_status}>
                            <Skillbar label="Plastic/Paper" value="20%" backgroundColor="red" />
                            <Skillbar label="Metal" value="40%" backgroundColor="red" />
                            <Skillbar label="Waste" value="40%" backgroundColor="red" />
                        </div>
                        <div className={styles.btn}>Focus</div>
                    </div>
                </div>
                <div className={styles.progress}>
                    <CircularProgressbar
                        value={percentage3}
                        text={`${percentage3}%`}
                        styles={buildStyles({
                            textColor: "#f9ccca",
                            pathColor: "#ffb43e",
                        })}
                    />
                    <div className={styles.progress_info}>
                        <h1 className={styles.progress_title}>Sector 3</h1>
                        <div className={styles.progress_status}>
                            <Skillbar label="Plastic/Paper" value="13%" backgroundColor="red" />
                            <Skillbar label="Metal" value="86%" backgroundColor="red" />
                            <Skillbar label="Waste" value="1%" backgroundColor="red" />
                        </div>
                        <div className={styles.btn}>Focus</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MCPComponent = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClick} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal onClose={props.onClick} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}
export default MCPComponent;