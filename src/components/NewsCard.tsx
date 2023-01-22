import React, {FC, useCallback} from 'react';
// @ts-ignore
import sprite from "../sprites.svg"
import {News} from "../types/News";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";
import {useAppSelector} from "../hooks/useAppSelector";
import Marked from "./Marked";

const NewsCard: FC<{ item: News }> = ({item}) => {
    const {searchRequest} = useAppSelector(state => state.newsReducer)

    const light = useCallback((str: string) => {
        return <Marked str={str} filter={searchRequest}/>
    }, [searchRequest])

    const description = item.summary.length <= 100
        ? item.summary
        : item.summary.substring(0, 97).concat("...")

    const date = new Date(item.publishedAt)
    const published = date.toLocaleDateString('en-us', {year: "numeric", month: "short", day: "numeric"})

    return (
        <Card sx={{width: "100%", height: "100%"}}>
            <CardActionArea sx={{position: "relative", height: "100%"}} href={"/article?id=" + item.id}>
                <CardMedia
                    component="img"
                    image={item.imageUrl}
                    alt="article photo"
                    sx={{
                        height: 217,
                        objectFit: "cover"
                    }}
                />
                <CardContent sx={{padding: "25px 25px 69px"}}>
                    <Typography variant="body2" color="text.secondary">
                        <svg className={"calendar-icon"}>
                            <use href={sprite + "#calendar"}/>
                        </svg>
                        &nbsp;{published}</Typography>
                    <Typography variant="h5">{light(item.title)}</Typography><br/>
                    <Typography variant="body2" color="text.secondary">
                        {light(description)}
                    </Typography>
                </CardContent>
                <CardActions sx={{position: "absolute", bottom: 0,padding: "0 25px 25px"}}>
                    <div className={"news-grid_read-more"}>Read more &nbsp;
                        <svg>
                            <use href={sprite + "#arrow"}/>
                        </svg>
                    </div>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

export default NewsCard;