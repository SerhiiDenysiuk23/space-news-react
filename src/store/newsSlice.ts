import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {News} from "../types/News";

type NewsStateType = {
    newsList: News[]
    newsItem: News | null
}

const initialState: NewsStateType = {
    newsList: [],
    newsItem: null
}

export const newsSlice = createSlice({
    name: "newsSlice",
    initialState,
    reducers: {
        setNewsListCount: (state, action: PayloadAction<number>) => {
            return {...state, count: action.payload}
        },
        setNewsList: (state, action: PayloadAction<News[]>) => {
            return {...state, newsList: action.payload}
        },
        setNewsItem: (state, action: PayloadAction<News>) => {
            return {...state, newsItem: action.payload}
        },
    }
})

export const {setNewsListCount, setNewsList, setNewsItem} = newsSlice.actions

export const setNewsListAction = createAction<number>("setNewsList")
export const setNewsItemAction = createAction<News[]>("setNewsItem")
export const setNewsListCountAction = createAction<News[]>("setNewsListCount")