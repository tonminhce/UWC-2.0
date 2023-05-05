
import styles from './HomePage.module.css';

import { uiActions } from '../../store/ui_slice';
import { useDispatch, useSelector } from 'react-redux';

import SignInModal from './Home_Components/Authentication_Modal/SignInModal';
import SignUpModal from './Home_Components/Authentication_Modal/SignUpModal';
import LoadingModal from '../../components/UI/Others/loading/loading';
import Notification from '../../components/UI/Others/notification/Notification';
import Navigation from './Home_Components/Navigation_Menu/Navigation';
import { auth } from '../../services/config';




function HomePage() {
    const userName = useSelector(state => state.data.user.userName);

    const isLoadingVisible = useSelector(state => state.ui.isLoadingVisible)
    const isNotificationVisible = useSelector(state => state.ui.notificationVisible);
    const notification = useSelector(state => state.ui.notification);
    const signInUI = useSelector(state => state.ui.signInIsVisible);
    const signUpUI = useSelector(state => state.ui.signUpIsVisible);
    const dispatch = useDispatch();

    const AuthentiationMethodHandler = () => {
        dispatch(uiActions.toggleSignInUI());
    }

    const toggleSigInUIHandler = () => {
        dispatch(uiActions.toggleSignInUI());
    };
    const toggleSignUpUIHandler = () => {
        dispatch(uiActions.toggleSignUpUI())
    }
    const toggleNotificationHandler = () => {
        dispatch(uiActions.toggleNotification())
    }

    return (
        <div className={styles.HomePage}>
            {signInUI && <SignInModal onClick={toggleSigInUIHandler} />}
            {signUpUI && <SignUpModal onClick={toggleSignUpUIHandler} />}
            {isLoadingVisible && <LoadingModal />}
            {isNotificationVisible && <Notification onClick={toggleNotificationHandler} title={notification.title} message={notification.message} />}

            <Navigation />
            <header className={styles.flex}>
                <section className={styles.flex_content}>
                    <article className={styles.padding_1x}>
                        <h1 className={styles.title}>Ho Chi Minh City <br />  Waste Management System</h1>
                        <p>{auth.currentUser ? `Welcome Back ${userName}` : "A solution for Ho Chi Minh City Waste Handling System"}</p>
                        <button className={styles.getStarted} onClick={AuthentiationMethodHandler}>Sign In Now!</button>
                    </article>
                </section>
            </header>
        </div>
    );
}
export default HomePage;