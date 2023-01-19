import React from 'react';
// @ts-ignore
import sprite from "../sprites.svg"

const NewsCard = () => {
    return (
        <div className={"news-grid_card"}>
            <div className={"news-grid_photo"}>
                {/*<img src="../testMedia/img.png" alt="image"/>*/}
                <div className={"photo-test"}/>
            </div>
            <div className={"news-grid_content"}>
                <div className="news-grid_date">
                    <svg><use href={sprite + "#calendar"}/></svg>
                    &nbsp;June 29th, 2021
                </div>
                <h2>The 2020 World's Most Valuable Brands</h2>
                <p className={"news-grid_description"}>Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...</p>
                <div className={"news-grid_read-more"}>Read more &nbsp;
                    <svg><use href={sprite + "#arrow"}/></svg>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;