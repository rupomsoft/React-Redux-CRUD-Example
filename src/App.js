import React from 'react';
import ProductList from "./component/ProductList";
import CreateUpdateForm from "./component/CreateUpdateForm";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import FullScreenLoader from "./component/FullScreen-Loader";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ReadPage/>}/>
                    <Route path="/create" element={<CreatePage/>}/>
                </Routes>
            </BrowserRouter>
            <FullScreenLoader/>
        </div>
    );
};

export default App;