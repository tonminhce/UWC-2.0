import { Link } from 'react-router-dom';
import Modal from '../Modal';
import styles from './Profile_Modal.module.css';

import {auth ,db} from '../../../../services/config'

import { doc, setDoc,getDoc } from "firebase/firestore";

import { useEffect, useRef, useState } from 'react';

import {useDispatch } from 'react-redux';
import { uiActions } from '../../../../store/ui_slice';

const ProfileModal = (props) => {
    
    const [user,setUser] = useState([]);

    const dispatch = useDispatch()

    const PhoneRef = useRef();
    

    useEffect(() =>{
        const getData = async () =>{
            try{
                if(!auth.currentUser) return
                const userRef = doc(db, 'USERS_INFO', auth.currentUser.uid);
                const docSnap = await getDoc(userRef);
                if (docSnap.exists()) {
                    setUser(docSnap.data())
                }
                else{
                    alert('ERROR!')
                }
            }
            catch(err){
                alert(err)
            }
        }
        getData()
    },[])

    const submitHandler = (e) =>{
        e.preventDefault();
        const setData = async () =>{
            dispatch(uiActions.toggleLoading());
            try{
                if(!auth.currentUser) return
                const userRef = doc(db, 'USERS_INFO', auth.currentUser.uid);
                await setDoc(userRef, {phone: PhoneRef.current.value}, { merge: true });
                dispatch(uiActions.toggleLoading());
            }
            catch(err){
                alert(err)
            }
        }
        if(PhoneRef.current.value.length < 10 || PhoneRef.current.value.length > 10){
            alert('Phone number must be 10 digits')
            return
        }
        setData()
    }

    return ( 
        <Modal>
            <div className={styles.User_Profile}>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png'></img>
                <h3 className={styles.User_Name}>{user.userName}</h3>
                <div className={styles.User__btn}>PROFILE</div>
            </div>
            <form className={styles.User_Profile_Information} onSubmit={submitHandler}>
                <input type="text" placeholder="Full Name" className={styles.input} value={user.userName} readOnly />
                <input type="date" placeholder="Day of Birth" className={styles.input} value={user.birth} />
                <input type="email" placeholder="Email" className={styles.input} value={user.email}  />
                <input type="phone" placeholder="Phone No." className={styles.input} defaultValue={user.phone} ref={PhoneRef}/>
                <div className={styles.User_Profile_Information__btn__bottom}>
                    <button class={styles.btn}><Link to='/dashboards'>Cancel</Link></button>
                    <button type='submit' class={styles.btn} >Update</button>
                </div>
            </form>
        </Modal>

    );

}
export default ProfileModal;