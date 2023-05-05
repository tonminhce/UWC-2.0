import styles from './switch.module.css';

import vie from '../../../../assests/vietnam.png'
import eng from '../../../../assests/united-kingdom.png'

import { uiActions } from '../../../../store/ui_slice';
import { useDispatch } from 'react-redux';

const Switch = () => {
    const dispatch = useDispatch()

    const CheckboxHandler = () => {
        console.log("clicked")
        dispatch(uiActions.toggleTranslate())
    }

    return (
        <div className={styles.switch}>
            <img src={eng} alt="flag1"></img>
            <label className={styles.toggle} htmlFor="myInput">
                <input type="checkbox" onChange={CheckboxHandler} name="myInput" id="myInput" />
                <div className={styles.toggle__fill}></div>
            </label>
            <img src={vie} alt="flag2"></img>
        </div>
    )
}

export default Switch;