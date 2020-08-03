import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import NavSub from "./NavSub";
import "./Header.css";

function Header() {
    const [subPage, setSubPage] = useState("");
    const [openSub, setOpenSub] = useState(false);
    const [mainPage, setMainPage] = useState("");

    const handleClickMainPage = (page) => {
        setOpenSub(true);
        setMainPage(page);
    };

    const handleClickSubPage = (page) => {
        setSubPage(page);
    };

    const handleClickHome = () => {
        setSubPage("");
        setOpenSub(false);
        setMainPage("");
    };
    return (
        <div className="header">
            <div className="header__Logo">
                <Link to="/" onClick={handleClickHome}>
                    GNB
                </Link>
            </div>
            {/* MAIN PAGE NAV */}
            <div className="header__navMain">
                <NavLink
                    to="/page1"
                    activeClassName="active"
                    onClick={() => handleClickMainPage("page1")}
                >
                    page1
                </NavLink>
                <NavLink
                    to="/page2"
                    activeClassName="active"
                    onClick={() => handleClickMainPage("page2")}
                >
                    page2
                </NavLink>
                <NavLink
                    to="/page3"
                    activeClassName="active"
                    onClick={() => handleClickMainPage("page3")}
                >
                    page3
                </NavLink>
                <NavLink
                    to="/page4"
                    activeClassName="active"
                    onClick={() => handleClickMainPage("page4")}
                >
                    page4
                </NavLink>
            </div>
            {/* SUB PAGE NAV */}
            <NavSub
                open={openSub}
                mainPage={mainPage}
                subPage={subPage}
                handleClickSubPage={handleClickSubPage}
            />
        </div>
    );
}

export default Header;
