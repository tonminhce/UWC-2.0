
import React from "react";
import ReactDOM from "react-dom";

import styles from './Task_Modal.module.css';

import { uiActions } from '../../../../store/ui_slice';
import { useDispatch,useSelector } from 'react-redux';

import { db } from '../../../../services/config';
import { collection, getDocs  } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const Backdrop = (props) => {
    const dispatch = useDispatch();
    const isAssigningTruckVisible = useSelector(state => state.ui.isAssigningTruckVisible)

    const clickHandler = () =>{
        if(isAssigningTruckVisible === true){
            dispatch(uiActions.toggleAssigningTruckUI())
        }
        else {
            dispatch(uiActions.toggleAssigningEmployeeUI())
        }
    }
    return <div className={styles.backdrop} onClick={clickHandler} />;
}

const Modal = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.data.user)

    const isAssigningTruckVisible = useSelector(state => state.ui.isAssigningTruckVisible)
    const isAssigningEmployeeVisible = useSelector(state => state.ui.isAssigningEmployeeVisible)


    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const getUsersData = async () => {
            const querySnapshot = await getDocs(collection(db, "USERS_INFO"));
            const temp = [];
            querySnapshot.forEach((doc) => {
                temp.push(doc.data());
            });
            setAllUsers(temp);
        }
        getUsersData();
    }, [])

    console.log(allUsers);

    const clickHandler1 = (e) =>{
        dispatch(uiActions.toggleAssigningTruckUI())
        if(e.target.id === "Assign"){
            dispatch(uiActions.toggleLoading())
            setTimeout(() => {
                dispatch(uiActions.toggleLoading())
                dispatch(uiActions.toggleNotification())

            }, 1500);
        }
    }
    const clickHandler2 = (e) =>{
        dispatch(uiActions.toggleAssigningEmployeeUI())
        if(e.target.id === "Assign"){
            dispatch(uiActions.toggleLoading())
            setTimeout(() => {
                dispatch(uiActions.toggleLoading())
                dispatch(uiActions.toggleNotification())

            }, 1500);
        }
    }
    const [position, setPosition] = useState()
    useEffect(()=>{
        const getPositionData = async () => {
            const querySnapshot = await getDocs(collection(db, "MCP_INFO"));
            const temp = [];
            querySnapshot.forEach((doc) => {
                temp.push(doc.data());
            });
            
            setPosition(temp);
        }
        getPositionData();
    },[])

    return (
        <div className={styles.modal__wrapper}>
            {isAssigningTruckVisible  && <form className={styles.modal__form} onSubmit={props.onSubmit}>
                <h2 className={styles.modal__form__header}>Assign Truck</h2>
                <select className={styles.modal__form__control}>
                    <option value="" selected disabled hidden>Choose Staff</option>
                    {
                        allUsers.map((user) => {
                            if(user.role !== "Admin"){
                                return <option value={user.userName}>{user.userName} - {user.role}</option>
                            }
                        })
                    }
                </select>
                <input type="text" className={styles.modal__form__control} name="description" placeholder="Task Description?" required="" autofocus="" />

                <input type="date" className={`${styles.modal__form__control} ${styles.modal__form__date}`} name="deadline" placeholder="Deadline?..." required="" autofocus="" />
                
                <input type="text" className={styles.modal__form__control} name="assignee" placeholder="Assignee?" required="" autofocus="" value={'Asignee - ' + user.userName} readOnly/>
                
                <div className={styles.btns}>
                    <button className={styles.modal__form__button} type="submit" id='Cancel' onClick={clickHandler1}>Cancel</button>
                    <button className={styles.modal__form__button} type="submit" id='Assign' onClick={clickHandler1}>Assign Truck</button>
                </div>
            </form>
            }
            {
                isAssigningEmployeeVisible && <form className={styles.modal__form} onSubmit={props.onSubmit}>
                <h2 className={styles.modal__form__header}>Assign Employee</h2>
                <select className={styles.modal__form__control}>
                    <option value="" selected disabled hidden>Choose MCPs</option>
                    {
                        position && position.map((pos) => {
                            return <option value={pos.name}>{'MCP - '+pos.name}</option>
                        })
                    }
                </select>
                <input type="text" className={styles.modal__form__control} name="description" placeholder="Task Description?" required="" autofocus="" />
                <input type="time" className={styles.modal__form__control} name="time" placeholder="Time?" min="09:00" max="18:00" required/>
                <input type="date" className={`${styles.modal__form__control} ${styles.modal__form__date}`} name="deadline" placeholder="Deadline?..." required="" autofocus="" />
                <input type="text" className={styles.modal__form__control} name="assignee" placeholder="Assignee?" required="" autofocus="" value={user.userName} readOnly/>
                <select className={styles.modal__form__control}>
                    <option value="" selected disabled hidden>Choose Truck</option>
                    <option value={"McNeilus"}>McNeilus</option>
                </select>
                <div className={styles.btns}>
                    <button className={styles.modal__form__button} type="submit" id='Cancel' onClick={clickHandler2}>Cancel</button>
                    <button className={styles.modal__form__button} type="submit" id='Assign' onClick={clickHandler2}>Assign Employee</button>
                </div>
            </form>
            }
        </div>
    );
}



const TaskModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal />, document.getElementById('overlay-root'))}
        </React.Fragment>
    );

}
export default TaskModal;