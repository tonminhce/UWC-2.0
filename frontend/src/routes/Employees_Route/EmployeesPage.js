// MODEL IMPORTED//
import EmployeeCenterboard from './Employee_Components/employee_centerboard/employee_centerboard';
import SideBar from '../../components/Side_Board/Side_Board';
import Notification from '../../components/UI/Others/notification/Notification'
import LoadingModal from '../../components/UI/Others/loading/loading';
import TaskModal from '../../components/UI/Modal/AssignTask_Modal/Task_Modal';


//css
import styles from './EmployeesPage.module.css';


//Hooks
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui_slice';

//Firebase
import { db } from '../../services/config';
import { collection, getDocs  } from 'firebase/firestore';
import { useEffect, useState } from 'react';



// const DUMMY_DATA = [
//     {
//         name: 'Tôn Minh',
//         title: 'Janitor',
//         workTime: '8:00 - 17:00',
//         situation: 'On Time'
//     },
//     {
//         name: 'Tôn Minh',
//         title: 'Janitor',
//         workTime: '8:00 - 17:00',
//         situation: 'On Time'
//     },
//     {
//         name: 'Tôn Minh',
//         title: 'CEO',
//         workTime: '8:00 - 17:00',
//         situation: 'On Time'
//     },
//     {
//         name: 'Tôn Minh',
//         title: 'Janitor',
//         workTime: '8:00 - 17:00',
//         situation: 'On Time'
//     },
//     {
//         name: 'Tôn Minh',
//         title: 'Janitor',
//         workTime: '8:00 - 17:00',
//         situation: 'On Time'
//     },
//     {
//         name: 'Tôn Minh',
//         title: 'Collector',
//     },
//     {
//         name: 'Tôn Minh',
//         title: 'Collector',
//     },
//     {
//         name: 'Tôn Minh',
//         title: 'Collector',
//     },
//     {
//         name: 'Tôn Minh',
//         title: 'Janitor',
//     },
// ]



const EmployeesPage = (props) => {
    const [allUsers,setAllUsers] = useState([]);

    const isAssigningEmployee = useSelector(state => state.ui.isAssigningEmployeeVisible);
    const isNotificationVisible = useSelector(state => state.ui.notificationVisible);
    const isLoadingVisible = useSelector(state => state.ui.isLoadingVisible);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(uiActions.toggleLoading());
        const getUsersData = async () => {
            const querySnapshot = await getDocs(collection(db, "USERS_INFO"));
            const temp = [];
            querySnapshot.forEach((doc) => {
                temp.push(doc.data());
            });
            dispatch(uiActions.toggleLoading());
            setAllUsers(temp);
        }
        getUsersData();
    },[])
    const clickHandler = () => {
        dispatch(uiActions.toggleNotification());
    }
    return (
        <main className={styles.employee__main}>
            {isAssigningEmployee && <TaskModal />}
            {isNotificationVisible && <Notification title={"Assign Successful"} message={"Your Employee Will Soon Receive This Task !"} onClick={clickHandler}/>}
            {isLoadingVisible && <LoadingModal />}
            <SideBar />
            <EmployeeCenterboard users={allUsers} />
        </main>
    )
}

export default EmployeesPage;