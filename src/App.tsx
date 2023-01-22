import React from 'react';
import NewsGrid from "./components/NewsGrid";
import SearchBar from "./components/SearchBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewsItemPage from "./components/NewsItemPage";

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
                            <NewsGrid/>
                        </section>
                    </>
                }/>

                <Route path={"/article"} element={ <NewsItemPage/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
