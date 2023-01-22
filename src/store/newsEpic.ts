import {combineEpics, Epic, ofType} from "redux-observable";
import {
    setNewsItem,
    setNewsItemAction,
    setNewsList,
    setNewsListAction,
    setNewsSearchResp,
    setNewsSearchRespAction
} from "./newsSlice";
import {concatMap, from, map, mergeMap, Observable} from "rxjs";
import {requestArticle, requestDefaultArticleList, requestSearchArticleList} from "../api/core";
import {News} from "../types/News";


const fetchNewsListEpic: Epic = (action$: Observable<ReturnType<typeof setNewsListAction>>) => {
    return action$.pipe(
        ofType(setNewsListAction.type),
        mergeMap(action => from(requestDefaultArticleList(action.payload)).pipe(
            map(response => {
                // console.warn(response)
                return setNewsList(response);
            })
        ))
    )
}

const fetchNewsSearchRespEpic: Epic = (action$: Observable<ReturnType<typeof setNewsSearchRespAction>>) => {
    return action$.pipe(
        ofType(setNewsSearchRespAction.type),
        concatMap(action => from(requestSearchArticleList("title", action.payload.limit, action.payload.request)).pipe(
            map((responseTitle: News[]) => {
                const blackList: number[] = []
                responseTitle.forEach(item => blackList.push(item.id))
                return {responseTitle, action, blackList};
            })
        )),
        concatMap(({
                       responseTitle,
                       action,
                       blackList: blacklist
                   }) => from(requestSearchArticleList("summary", action.payload.limit - blacklist.length, action.payload.request, blacklist)).pipe(
            map((response: News[]) => {
                return setNewsSearchResp({title: responseTitle, summary: response})
            })
        ))
    )
}

const fetchNewsItemEpic: Epic = (action$: Observable<ReturnType<typeof setNewsItemAction>>) => {
    return action$.pipe(
        ofType(setNewsItemAction.type),
        mergeMap(action => from(requestArticle(action.payload)).pipe(
            map(response => {
                console.warn("+++")
                return setNewsItem(response)
            })
        ))
    )
}

export const newsEpics = combineEpics(
    fetchNewsListEpic,
    fetchNewsSearchRespEpic,
    fetchNewsItemEpic
)