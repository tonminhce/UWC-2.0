
import { useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui_slice";
//end redux

//firebase
import { doc, setDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/config";
//end firebase


const useSignUp = () => {
    const [userData, setUserData] = useState({})

    const dispatch = useDispatch()
    const isLoadingVisible = useSelector(state => state.ui.isLoadingVisible)

    async function HandleSignUpData(userInputData) {
        try {
            if (userInputData.userName.length === 0) {
                throw new Error("Username cannot be empty ")
            }
            else if (userInputData.userName.length > 15) {
                throw new Error("Username cannot be longer than 15 characters ")
            }
            else if (userInputData.userName.length < 3) {
                throw new Error("Username cannot be shorter than 3 characters ") //firebase has a limit of 3 characters  for username
            }
            else if (userInputData.userName.includes(" ") || userInputData.userName.includes(".") || userInputData.userName.includes("#") || userInputData.userName.includes("$") || userInputData.userName.includes("[") || userInputData.userName.includes("]") || userInputData.userName.includes("@")) {
                throw new Error("Username cannot contain spaces or special characters ")
            }
            else if (new Date(userInputData.birth).getFullYear() > new Date().getFullYear() - 13) {
                throw new Error("You must be at least 13 years old to use our service ")
            }
            else if (userInputData.password !== userInputData.confirmedPassword) {
                throw new Error("Passwords do not match ")
            }

            await createUserWithEmailAndPassword(auth, userInputData.email, userInputData.password)

            delete userInputData.password // dont push our password to database
            delete userInputData.confirmedPassword
            //check if form is valid
            await setDoc(doc(db, "USERS_INFO", auth.currentUser.uid), userInputData)

            dispatch(uiActions.toggleSignUpUI())

            dispatch(uiActions.toggleNotification({
                title: "Sign Up Successful",
                message: "You can now sign in"
            }))
        }
        catch (error) {
            dispatch(uiActions.toggleNotification({
                title: "Sign Up Failed",
                message: "Error: " + error.message.slice(error.message.indexOf("/") + 1, error.message.indexOf(")")).toUpperCase().replace(/-/g, ' ')//regex expression
            }))

            if (isLoadingVisible) {
                dispatch(uiActions.toggleLoading())
            }

        }
        setUserData(userInputData)
    }

    return [userData, HandleSignUpData]
}

export default useSignUp