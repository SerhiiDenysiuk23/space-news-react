import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {News} from "../types/News";

type NewsStateType = {
    newsList: News[]
    newsSearchResp: News[]
    newsItem: News | null
    searchRequest: string
}

const initialState: NewsStateType = {
    newsList: [],
    newsSearchResp: [],
    newsItem: null,
    searchRequest: ""
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
        setNewsSearchResp: (state, action: PayloadAction<{ title: News[], summary: News[]}>) => {
            return {
                ...state,
                newsSearchResp: [...action.payload.title, ...action.payload.summary.filter(item => action.payload.title.includes(item))]
            }
        },
        setNewsItem: (state, action: PayloadAction<News>) => {
            return {...state, newsItem: action.payload}
        },
        setSearchRequest: (state, action: PayloadAction<string>) => {
            return {...state, searchRequest: action.payload}
        }
    }
})

export const {
    setNewsListCount,
    setNewsList,
    setNewsItem,
    setNewsSearchResp,
    setSearchRequest
} = newsSlice.actions

export const setNewsListAction = createAction<number>("setNewsList")
export const setNewsSearchRespAction = createAction<{ limit: number, request: string }>("setNewsSearchResp")
export const setNewsItemAction = createAction<number>("setNewsItem")
export const setNewsListCountAction = createAction("setNewsListCount")