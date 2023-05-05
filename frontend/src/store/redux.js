import { configureStore } from '@reduxjs/toolkit'


import { dataSlice, uiSlice } from './ui_slice'

const storage = configureStore({
    reducer: { ui: uiSlice.reducer, data: dataSlice.reducer }
})

export default storage