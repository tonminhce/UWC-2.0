import styles from './right_center.module.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../../../store/ui_slice';
import MCPComponent from '../MCP_Overview/MCP_component';

const RightCenter = () => {
    const dispatch = useDispatch()
    const isMCPVisible = useSelector(state => state.ui.isMCPVisible)

    const onTriggerMCP = () => {
        dispatch(uiActions.toggleMCPUI())
    }

    const percentage = 75;
    return (
        <div className={styles.rightCenter__container}>
            {isMCPVisible && <MCPComponent onClick={onTriggerMCP} />}
            <div className={styles.rightCenter__content}>
                <div><h2>Progress Goal</h2></div>
                <div className={styles.rightCenter__content__progessbar}>
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={15}
                        minValue={0}
                        maxValue={100}
                        styles={buildStyles({
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                            // Text size
                            textSize: '16px',
                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,
                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',
                            // Colors
                            pathColor: `rgba(255, 255, 255, ${percentage / 100})`,
                            textColor: 'white',
                            trailColor: '#404347',
                        })}

                    />
                </div>
                <div><p>You have {percentage} MCP needed to be done out of 100</p></div>
                <button className={styles.rightCenter__content__btn} onClick={onTriggerMCP}>View All</button>
            </div>
        </div>
    )
}
export default RightCenter;