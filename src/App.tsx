import React from 'react';
import NewsGrid from "./components/NewsGrid";
import SearchBar from "./components/SearchBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewsItemPage from "./components/NewsItemPage";
// @ts-ignore
import sprite from "./sprites.svg";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={
                    <>
                        <section className={"container search-section"}>
                            <h3>Filter by keywords</h3>
                            <SearchBar/>
                        </section>
                        <section className={"container page_main"}>
                            <h3>Results: <b>VAR</b></h3>
                            <NewsGrid/>
                        </section>
                    </>
                }/>

                <Route path={"/news"} element={
                    <>
                        <div className={"news-item-page_background"}></div>
                        <NewsItemPage/>
                        <div className={"news-item-page_return"}>
                            <svg><use href={sprite + "#arrow"}/></svg> Back to homepage
                        </div>
                    </>
                }/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
