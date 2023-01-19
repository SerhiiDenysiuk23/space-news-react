import {combineEpics, Epic, ofType} from "redux-observable";
import {setNewsList, setNewsListAction} from "./newsSlice";
import {from, map, mergeMap, Observable} from "rxjs";
import {requestArticleList} from "../api/core";


const fetchNewsListEpic: Epic = (action$: Observable<ReturnType<typeof setNewsListAction>>) => {
    return action$.pipe(
        ofType(setNewsListAction.type),
        mergeMap(action => from(requestArticleList("_limit", action.payload)).pipe(
            map(response => {
                console.warn(response)
                return setNewsList(response);
            })
        ))
    )
}

export const newsEpics = combineEpics(fetchNewsListEpic)