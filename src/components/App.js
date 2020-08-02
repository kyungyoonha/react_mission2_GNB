import React from "react";
import Header from "./Header";
import { Route } from "react-router-dom";
import home from "../pages/home";
import productPage1 from "../pages/productPage1";
import productPage2 from "../pages/productPage2";
import productPage3 from "../pages/productPage3";
import productPage4 from "../pages/productPage4";

function App() {
    return (
        <div>
            <Header />
            <Route path="/" exact component={home} />
            <Route path="/product1" component={productPage1} />
            <Route path="/product2" component={productPage2} />
            <Route path="/product3" component={productPage3} />
            <Route path="/product4" component={productPage4} />
        </div>
    );
}

export default App;
