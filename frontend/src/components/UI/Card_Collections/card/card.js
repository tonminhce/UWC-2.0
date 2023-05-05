import React from "react";

import styles from "./card.module.css";

const Card = (props) => {
    return (
        <div className={styles.card__container}>
            <div className={styles.card__content}>
                <p>{props.title}</p>
                <h1>{props.description}</h1>
            </div>
        </div>
    );
};
export default Card;