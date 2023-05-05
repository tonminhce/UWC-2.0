import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const translationEn = {
    Administration: "Administration",
    Maps: "Maps",
    Employees: "Employees",
    Checkout: "Signout",
    Dashboard: "Dashboard",
    Hello: "Hello",
    Inbox: "Inbox",
    Vehicles: "Vehicles",
    Settings: "Settings",
    Profile: "Profile",
    UWC: "UWC",
    Overview: "Dashboard Overview",
}
const translationVi = {
    Administration: "Quản Lý",
    Maps: "Bản Đồ",
    Employees: "Nhân Viên",
    Checkout: "Thoát",
    Dashboard: "Điều Khiển",
    Hello: "Xin Chào",
    Message: "Message",
    Vehicles: "Phương Tiện",
    Settings: "Cài Đặt",
    Profile: "Thông Tin",
    UWC: "UWC",
    Overview: "Tổng Quan",
}

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEn
        },
        vn: {
            translation: translationVi
        }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
})

export default i18n