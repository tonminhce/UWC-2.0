import styles from './chat-msg.module.css';

import mrCollector from '../../../../assests/mrCollector.jpg'
const ChatMsg = (props) => {
    return (
        <div className={`${styles.ChatMsg__container} ${props.data.owner?styles.ChatMsg__owner:""}`}>
            <div class={styles.ChatMsg__profile}>
                <img class={styles.ChatMsg__img} src={`${props.data.owner?mrCollector:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"}`} alt="" />
                <div class={styles.ChatMsg__date}>Message seen 1.22pm</div>
            </div>           
            <div class={styles.ChatMsg__content}>
                <div class={styles.ChatMsg__text}>{props.data.msg}</div>
            </div>
        </div>
    )
}

export default ChatMsg;