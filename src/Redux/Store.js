import {configureStore} from '@reduxjs/toolkit'
import surviceReducer from './Fecher/SurviceSlice'

export const store = configureStore({
    reducer:{
        SurviceApi:surviceReducer,
    }
})