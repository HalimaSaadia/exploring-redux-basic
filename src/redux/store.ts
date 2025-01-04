import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counter.ts"
import taskReducer from "./features/task/task.ts"
import userReducer from "./features/user/user.ts"



export const store = configureStore({
    reducer:{
        counter: counterReducer,
        todo: taskReducer,
        users:userReducer
    },
   
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch