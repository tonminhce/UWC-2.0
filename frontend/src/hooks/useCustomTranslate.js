import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import i18n from '../assests/translate/translate';

const useCustomTranslate = () => {
    const currentLanguage = useSelector(state => state.ui.userLanguage)
    useEffect(() => {
        if (currentLanguage === "vn") {
            i18n.changeLanguage("vn")
        }
        else {
            i18n.changeLanguage("en")
        }
    }, [currentLanguage])
}
export default useCustomTranslate;