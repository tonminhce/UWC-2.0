import BottomSlot from '../../../../../components/UI/Employee_Status/Employee_Status'
import styles from './right_bottom.module.css'
const DUMMY_DATA = [
    {
        key: 0,
        name:
            'Nguyen Van A',
        title:
            'Janitor',
        status:
            'Available'
    },
    {
        key: 1,
        name:
            'Thanh Thien',
        title:
            'Collector',
        status:
            'Unavailable'
    },
    {
        key: 2,
        name:
            'Tommy Thai',
        title:
            'Janitor',
        status:
            'Unavailable'
    },
]
const RightBottom = () => {
    return (
        <div className={styles.bottombox__container}>
            <div className={styles.bottombox__content}>
                <p>Overview</p>
                <div className={styles.bottombox__employees}>
                    {DUMMY_DATA.map((data) => {
                        return (
                            <BottomSlot
                                key={data.key}
                                name={data.name}
                                title={data.title}
                                status={data.status}
                            />
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}
export default RightBottom