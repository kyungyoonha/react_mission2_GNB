import React from "react";
import Header from "./Header";
import { Route } from "react-router-dom";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Header />
            <Route path="/" exact component={Page1} />
            <Route path="/Page1" exact component={Page1} />
            <Route path="/Page1/:pageId" component={Page1} />
            <Route path="/Page2" exact component={Page2} />
            <Route path="/Page2/:pageId" component={Page2} />
            <Route path="/Page3" exact component={Page3} />
            <Route path="/Page3/:pageId" component={Page3} />
            <Route path="/Page4" exact component={Page4} />
            <Route path="/Page4/:pageId" component={Page4} />
        </div>
    );
}

export default App;
