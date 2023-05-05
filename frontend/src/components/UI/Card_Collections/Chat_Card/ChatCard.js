
import styles from './ChatCard.module.css';

import mrCollector from '../../../../assests/mrCollector.jpg'
//nguoi tham gia

const ChatCard = (props) => {
    return (
        <div className={styles.chat__card}>
            <div className={styles.chat__card__avatar}>
                <img src={mrCollector}></img>
            </div>
            <div className={styles.char__card__info}>
                <div className={styles.chat__card__name}>
                    {props.data.name}
                </div>
                <div className={styles.chat__card_latest}>
                    {props.data.latest}
                </div>
            </div>
        </div>
    ) 
}

export default ChatCard;