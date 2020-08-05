import React from "react";
import Header from "./Header";
import { Route } from "react-router-dom";
import Page from "../pages/Page";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Header />
            <Route path="/" exact component={Page} />
            <Route path="/Page1" exact component={Page} />
            <Route path="/Page1/:pageId" component={Page} />
            <Route path="/Page2" exact component={Page} />
            <Route path="/Page2/:pageId" component={Page} />
            <Route path="/Page3" exact component={Page} />
            <Route path="/Page3/:pageId" component={Page} />
            <Route path="/Page4" exact component={Page} />
            <Route path="/Page4/:pageId" component={Page} />
        </div>
    );
}

export default App;
