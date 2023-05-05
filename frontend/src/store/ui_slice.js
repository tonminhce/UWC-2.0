import { createSlice } from '@reduxjs/toolkit';



export const uiSlice = createSlice({
    name: 'ui',
    initialState: { signInIsVisible: false, signUpIsVisible: false, notificationVisible: false, notification: {}, userLanguage: "en", isLoadingVisible: false, isMCPVisible: false, isAssigningTruckVisible: false, isAssigningEmployeeVisible: false },
    reducers: {
        toggleSignInUI(state) {
            state.signInIsVisible = !state.signInIsVisible; //reducer a function that takes the current state and returns a new state
        },
        toggleSignUpUI(state) {
            state.signUpIsVisible = !state.signUpIsVisible;
        }
        ,
        toggleTranslate(state) {
            if (state.userLanguage === "vn") {
                state.userLanguage = "en"
            } else {
                state.userLanguage = "vn"
            }
        },
        toggleNotification(state, action) {
            state.notification = action.payload
            state.notificationVisible = !state.notificationVisible
        },
        toggleLoading(state) {
            state.isLoadingVisible = !state.isLoadingVisible
        },
        toggleMCPUI(state) {
            state.isMCPVisible = !state.isMCPVisible
        },
        toggleAssigningTruckUI(state) {
            state.isAssigningTruckVisible = !state.isAssigningTruckVisible
        },
        toggleAssigningEmployeeUI(state) {
            state.isAssigningEmployeeVisible = !state.isAssigningEmployeeVisible
        }
        
    }
})

export const dataSlice = createSlice({
    name: 'data',
    initialState: { user: {} },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        }
    }
})
export const uiActions = uiSlice.actions;

export const dataActions = dataSlice.actions;


