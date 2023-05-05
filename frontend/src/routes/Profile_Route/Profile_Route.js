import { Link } from 'react-router-dom';
import styles from './Profile_Route.module.css';
import { IoMdArrowBack } from "react-icons/io";
import SearchBar from '../../components/UI/Bar_Collections/searchbar/searchbar';
import Switch from '../../components/UI/Others/switch/switch';
import ProfileModal from '../../components/UI/Modal/Profile_Modal/Profile_Modal';
import { useSelector } from 'react-redux';
import { uiActions } from '../../store/ui_slice';
import LoadingModal from '../../components/UI/Others/loading/loading';

const ProfileRoute = () => {
    const isLoadingVisible = useSelector(state => state.ui.isLoadingVisible)
    return (
        <div className={styles.Profile__container}>
            {isLoadingVisible && <LoadingModal />}
            <header className={styles.Profile__header}>
                <div className={styles.logo_section}>
                    <Link to={"/dashboards"} className={styles.logo} >
                        <IoMdArrowBack size={40} color="#f9690E" />
                    </Link>
                </div>
                <div className={styles.Profile__header__center}>
                    <SearchBar />
                </div>
                <div className={styles.Profile__header__user}>
                    <Switch />
                </div>
            </header>
            <main className={styles.Profile__main}>
                <ProfileModal />
            </main>
        </div>
    );
}
export default ProfileRoute;