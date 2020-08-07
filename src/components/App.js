import React from "react";
import Header from "./Header";
import { Router, Route } from "react-router-dom";
import Page from "../pages/Page";
import "./App.css";
import history from "../history";

function App() {
    return (
        <div className="app">
            <Router history={history}>
                <Header history={history} />
                <Route path="/" exact component={Page} />
                <Route path="/page1" exact component={Page} />
                <Route path="/page1/:pageId" component={Page} />
                <Route path="/page2" exact component={Page} />
                <Route path="/page2/:pageId" component={Page} />
                <Route path="/page3" exact component={Page} />
                <Route path="/page3/:pageId" component={Page} />
                <Route path="/page4" exact component={Page} />
                <Route path="/page4/:pageId" component={Page} />
            </Router>
        </div>
    );
}

export default App;
