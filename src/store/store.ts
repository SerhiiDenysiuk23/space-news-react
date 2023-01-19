import {configureStore} from '@reduxjs/toolkit';
import {newsSlice} from "./newsSlice";
import {newsEpics} from "./newsEpic";
import {createEpicMiddleware} from "redux-observable";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer: {
        newsReducer: newsSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(epicMiddleware)
})


export const state = store.getState();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
epicMiddleware.run(newsEpics);
