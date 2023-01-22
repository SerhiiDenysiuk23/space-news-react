import React, {FC, useEffect} from 'react';
import {News} from "../types/News";
import {useLocation} from "react-router-dom";
import queryString from 'query-string';
import {useAppSelector} from "../hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {setNewsItemAction} from "../store/newsSlice";
// @ts-ignore
import sprite from "../sprites.svg";

const NewsItemPage = () => {
    const location = useLocation()
    const query = queryString.parse(location.search)

    const {newsItem} = useAppSelector(state => state.newsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNewsItemAction(Number(query.id)))
    }, [])


    return newsItem != null
        ? <>
            <div className={"news-item-page_background"}><img src={newsItem.imageUrl} alt="photo"/></div>
            <section className={"container news-item-page"}>
                <h2>{newsItem?.title}</h2>
                <p>{newsItem?.summary}</p>
            </section>
            <div className={"news-item-page_return"}>
                <a href={"/"}><svg><use href={sprite + "#arrow"}/></svg> Back to homepage</a>
            </div>
        </>
        : null
}

export default NewsItemPage;