import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
// import counterReducer from "./features/counter/counter.ts"
// import taskReducer from "./features/task/task.ts"
// import userReducer from "./features/user/user.ts"

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // todo: taskReducer,
    // users:userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
