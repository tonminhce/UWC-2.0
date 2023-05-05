import { useState } from 'react';
import { auth, db } from '../../../../services/config';
import { doc, getDoc } from 'firebase/firestore'
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';



import storage from '../../../../store/redux';
import { uiActions } from '../../../../store/ui_slice';

const Navigation = () => {
    const [destination, setDestination] = useState("/");

    const clickHandler = async (e) => {
        if (!auth.currentUser) {
            console.log("Not logged in")
            e.preventDefault();
            storage.dispatch(uiActions.toggleNotification({ title: "Please sign in", message: "You need to sign in to access this page" }))
        }
        else {
            try {
                if (auth.currentUser) {
                    const docRef = doc(db, "USERS_INFO", auth.currentUser.uid)
                    const docSnap = await getDoc(docRef)
                    if (docSnap.exists()) {
                        const user = docSnap.data();
                        user.role === "Admin" ? setDestination("/dashboards") : setDestination("/dashboards");
                    }
                }
            }
            catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <nav className={styles.nav_menu}>
            <section className={styles.flex_content}>
                <strong className={styles.logo}><em className={styles.stroke}>U</em><em>WC 2.0</em> </strong>
            </section>
            <section className={`${styles.flex_content} ${styles.nav_content}`} id="nav_content">
                <a href="#" className={styles.active}>Home</a>
                <Link to={destination} onClick={clickHandler}>Dashboards</Link>
                <a href="#">Contact us</a>
                <a href="#">About us</a>
            </section>
        </nav>
    )
}
export default Navigation;