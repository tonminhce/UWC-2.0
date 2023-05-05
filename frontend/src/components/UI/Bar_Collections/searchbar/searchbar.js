import styles from "./searchbar.module.css";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
    return (
        <div className={styles.searchbar__container}>
            <form className={styles.searchbar__content}>
                <input type="search" className={styles.searchbar__input} placeholder="What are you looking for?" />
                <button type="submit" className={styles.searchbar__btn}>
                    <FiSearch />
                </button>
            </form>
        </div>
    );
}
export default SearchBar;