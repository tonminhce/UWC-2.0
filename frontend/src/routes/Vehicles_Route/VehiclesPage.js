
import SideBar from '../../components/Side_Board/Side_Board';
import VehicleCenterBoard from '../../routes/Vehicles_Route/Vehile_Components/vehicle_centerboard/vehicle_centerboard';
import styles from './VehiclesPage.module.css';
import Truck from '../../assests/trucks.png'
import TaskModal from '../../components/UI/Modal/AssignTask_Modal/Task_Modal';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui_slice';
import Notification from '../../components/UI/Others/notification/Notification'
import LoadingModal from '../../components/UI/Others/loading/loading';


const DUMMY_DATA = [
    {
        id: 1,
        image: Truck,
        alt: 'car',
        title: 'McNeilus',
        oilValue: `${Math.random()*100}%`,
        fuelValue: `${Math.random()*100}%`,
        capacityValue: `${Math.random()*100}%`,
        currentLocation: ' District 1'
    },
    {
        id: 2,
        image: Truck,
        alt: 'car',
        title: 'McNeilus',
        oilValue: `${Math.random()*100}%`,
        fuelValue: `${Math.random()*100}%`,
        capacityValue: `${Math.random()*100}%`,
        currentLocation: ' District 2'
    },
    {
        id: 3,
        image: Truck,
        alt: 'car',
        title: 'McNeilus',
        oilValue: `${Math.random()*100}%`,
        fuelValue: `${Math.random()*100}%`,
        capacityValue: `${Math.random()*100}%`,
        currentLocation: ' District 2'
    },
    {
        id: 4,
        image: Truck,
        alt: 'car',
        title: 'McNeilus',
        oilValue: `${Math.random()*100}%`,
        fuelValue: `${Math.random()*100}%`,
        capacityValue: `${Math.random()*100}%`,
        currentLocation: ' District 3'
    },
    {
        id: 5,
        image: Truck,
        alt: 'car',
        title: 'McNeilus',
        oilValue: `${Math.random()*100}%`,
        fuelValue: `${Math.random()*100}%`,
        capacityValue: `${Math.random()*100}%`,
        currentLocation: ' District 4'
    },
    {
        id: 6,
        image: Truck,
        alt: 'car',
        title: 'McNeilus',
        oilValue: `${Math.random()*100}%`,
        fuelValue: `${Math.random()*100}%`,
        capacityValue: `${Math.random()*100}%`,
        currentLocation: ' Huyen Nha Be'
    },
    {
        id: 7,
        image: Truck,
        alt: 'car',
        title: 'McNeilus',
        oilValue: `${Math.random()*100}%`,
        fuelValue: `${Math.random()*100}%`,
        capacityValue: `${Math.random()*100}%`,
        currentLocation: ' District 5'
    },

]

const VehiclesPage = (props) => {
    const isAssigningTruck = useSelector(state => state.ui.isAssigningTruckVisible);
    const isNotificationVisible = useSelector(state => state.ui.notificationVisible);
    const isLoadingVisible = useSelector(state => state.ui.isLoadingVisible);
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(uiActions.toggleNotification());
    }

    return (
        <main className={styles.VehiclesPage__main}>
            {isAssigningTruck && <TaskModal />}
            {isNotificationVisible && <Notification title={"Assign Successful"} message={"Your Employee Will Soon Get The Location Of The Truck !"} onClick={clickHandler}/>}
            {isLoadingVisible && <LoadingModal />}

            <SideBar />
            <VehicleCenterBoard DUMMY_DATA={DUMMY_DATA} />
        </main>
    )
}

export default VehiclesPage;