import React, {useEffect, useState} from 'react';
import NewsCard from "./NewsCard";
import {useAppSelector} from "../hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {setNewsListAction} from "../store/newsSlice";

const NewsGrid = () => {
    const newsList = useAppSelector(state => state.newsReducer.newsList)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setNewsListAction(10))
    },[])
    console.log(newsList)


    return (
        <div className={"news-grid"}>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
    );
};

export default NewsGrid;