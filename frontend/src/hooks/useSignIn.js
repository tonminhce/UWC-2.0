import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"

import { uiActions } from "../store/ui_slice"
import { auth } from "../services/config"
import { signInWithEmailAndPassword } from "firebase/auth"
const useSignIn = () => {

    const [userData, setUserData] = useState({})
    const dispatch = useDispatch()
    const isLoadingVisible = useSelector(state => state.ui.isLoadingVisible)

    async function HandleSignInData(userInputData) {
        try {
            await signInWithEmailAndPassword(auth, userInputData.email, userInputData.password)

            dispatch(uiActions.toggleSignInUI())

            dispatch(uiActions.toggleNotification({
                title: "Sign In Successful",
                message: "Welcome back"
            }))
        }
        catch (error) {
            dispatch(uiActions.toggleNotification({
                title: "Sign In Failed",
                message: "Error: " + error.message.slice(error.message.indexOf("/") + 1, error.message.indexOf(")")).toUpperCase().replace(/-/g, ' ')//regex expression
            }))
            if (isLoadingVisible) {
                dispatch(uiActions.toggleLoading())
            }
        }
        setUserData(userInputData)
    }

    return [userData, HandleSignInData]
}

export default useSignIn;