import React from "react";

import styles from './Messenger_App.module.css';
import ChatCard from "../../../components/UI/Card_Collections/Chat_Card/ChatCard";
import ChatBox from "../../../components/UI/Others/chatbox/chatbox";
import ChatMsg from "../../../components/UI/Others/chatbubble/chat-msg";

import {BsTelephone} from 'react-icons/bs'
import {FiVideo} from 'react-icons/fi'

const DUMMY_DATA = [
    {
        name: "Nguyen Van A",
        latest: "Hello"
    },
    {
        name: "Nguyen Van B",
        latest: "Hello"
    },
    {
        name: "Nguyen Van C",
        latest: "Hello"
    },
    {
        name: "Nguyen Van D",
        latest: "Hello"
    },
    {
        name: "Nguyen Van E",
        latest: "Hello"
    },
    {
        name: "Nguyen Van F",
        latest: "Hello"
    },
    {
        name: "Nguyen Van G",
        latest: "Hello"
    },
    {
        name: "Nguyen Van H",
        latest: "Hello"
    },
    {
        name: "Nguyen Van I",
        latest: "Hello"
    }
]

const DUMMY_DATA_MSG = [
    {
        name: "Nguyen Van A",
        owner: false,
        msg: "Hello"
    },
    {
        name: "Nguyen Van A",
        owner: false,
        msg: "Hello"
    },
    {
        name: "Nguyen Van A",
        owner: false,
        msg: "Hello"
    },
    {
        name: "Nguyen Van A",
        owner: false,
        msg: "Hello"
    },
    {
        name: "Nguyen Van A",
        owner: false,
        msg: "Hello"
    },
    {
        name: "Nguyen Van A",
        owner: false,
        msg: "Hello"
    },
    {
        name: "Nguyen Van A",
        owner: false,
        msg: "Hello"
    },
    {
        name: "Nguyen Van A",
        owner: false,
        msg: "MCP No 7 is Full"
    },
    {
        name: "Nguyen Van A",
        owner: false,
        msg: "Should I Go There first?????"
    },
    {
        name: "Nguyen Van B",
        owner: true,
        msg: "It's Fine Do Your Current Job 1st"
    }
]

const MessengerApp = () => {
    return (
        <div className={styles.app__container}>
            <div className={styles.app__sidebar}>
                {DUMMY_DATA.map((item) => {
                    return (
                        <ChatCard data = {item}/>
                    )
                })}
            </div>
            <div className={styles.app__main}>
                <div className={styles.app__main__header}>
                    {DUMMY_DATA[0].name}
                </div>
                <div className={styles.app__main__center}>
                    {DUMMY_DATA_MSG.map((item) => {
                        return (
                            <ChatMsg data={item} />
                        )
                    })}
                </div>
                <div className={styles.app__main__footer}>
                    <ChatBox />
                </div>
            </div>
            <div className={styles.app__detail}>
                <div className={styles.app__header}>
                    <div className={styles.app__header__profile}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"></img></div>
                    <div className={styles.app__header__title}>Nguyen Van A</div>
                    <div className={styles.app__header__subtitle}>Created by Aysenur, 1 May 2020</div>
                    <div className={styles.app__header__buttons}>
                    <button className={styles.app__header__button}>
                        <BsTelephone size={20}/>
                        Call Now
                    </button>
                    <button className={styles.app__header__button}>
                        <FiVideo size={20}/>
                        Video Chat
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessengerApp;
