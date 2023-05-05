import React from 'react';
import styles from './chatbox.module.css';

import { HiOutlineVideoCamera } from "react-icons/hi";
import {RiImageLine} from "react-icons/ri";
import {CiCirclePlus} from "react-icons/ci";
import {BiConfused,BiLike} from "react-icons/bi";
const ChatBox = () => {
    return (
        <div className={styles.Chatbox__container}>
            <i className={styles.ChatBox__icon}><HiOutlineVideoCamera  size={30} color="#797a7c" /></i>
            <i className={styles.ChatBox__icon}><RiImageLine size={30}  color="#797a7c" /></i>
            <i className={styles.ChatBox__icon}> <CiCirclePlus size={30}  color="#797a7c" /></i>
            <input type="text" placeholder="Type Something Here..." />
            <i className={styles.ChatBox__icon}> <BiConfused size={30} color="#797a7c" /></i>
            <i className={styles.ChatBox__icon}><BiLike size={30}  color="#797a7c" /></i>
        </div>
    )
}
export default ChatBox;