import VehicleCard from '../../../../components/UI/Card_Collections/Vehicle_Card/vehicle_card';
import styles from './vehicle_centerboard.module.css'
const VehicleCenterBoard = ({ DUMMY_DATA }) => {
    return (
        <div className={styles.centerboard_grid}>
            <div className={styles.centerboard_grid__item}>
                {DUMMY_DATA.map((item) => (
                    <VehicleCard key={item.id} image={item.image} alt={item.alt} title={item.title} oilValue={item.oilValue} fuelValue={item.fuelValue} capacityValue={item.capacityValue} currentLocation={item.currentLocation} />
                ))}
            </div>
        </div>
    )
}
export default VehicleCenterBoard;