import React, {useEffect, useState} from 'react';
import NewsCard from "./NewsCard";
import {useAppSelector} from "../hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {
    setNewsListAction,
    setNewsSearchRespAction
} from "../store/newsSlice";
import {News} from "../types/News";

const NewsGrid = () => {
    const {
        newsList,
        searchRequest,
        newsSearchResp
    } = useAppSelector(state => state.newsReducer)
    const dispatch = useDispatch()

    const limit = 100

    const [state, setState] = useState<News[]>([])

    useEffect(() => {
        dispatch(setNewsListAction(limit))
        setState(newsList)
    }, [])

    useEffect(() => {
        if (searchRequest.length > 1) {
            dispatch(setNewsSearchRespAction({limit, request: searchRequest}))
        }
    }, [searchRequest])

    useEffect(()=>{
        if (searchRequest.length > 2)
            setState([...newsSearchResp])
        else
            setState(newsList)

    },[searchRequest, newsList, newsSearchResp])

    return (
        <><h3>Results: {state.length < limit ? state.length : limit + "+" }</h3>
            <div className={"news-grid"}>
                {state.length
                    ? state.map(item => <NewsCard key={item.id} item={item}/>)
                    : null}
            </div>
        </>
    );
};

export default NewsGrid;