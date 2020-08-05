import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import NavSub from "./NavSub";

function Header() {
    const [page, setPage] = useState("");
    const [isToggle, setToggle] = useState(false);

    const onClickMainPage = (page) => {
        setToggle(true);
        setPage(page);
    };

    const onClickHome = () => {
        setToggle(false);
        setPage("");
    };
    return (
        <div className="header">
            <div className="header__Logo">
                <Link to="/" onClick={onClickHome}>
                    GNB
                </Link>
            </div>
            {/* MAIN PAGE NAV */}
            <div className="header__navMain">
                <NavLink
                    to="/page1"
                    activeClassName="active"
                    onClick={() => onClickMainPage("page1")}
                >
                    page1
                </NavLink>
                <NavLink
                    to="/page2"
                    activeClassName="active"
                    onClick={() => onClickMainPage("page2")}
                >
                    page2
                </NavLink>
                <NavLink
                    to="/page3"
                    activeClassName="active"
                    onClick={() => onClickMainPage("page3")}
                >
                    page3
                </NavLink>
                <NavLink
                    to="/page4"
                    activeClassName="active"
                    onClick={() => onClickMainPage("page4")}
                >
                    page4
                </NavLink>
            </div>
            {/* SUB PAGE NAV */}
            {isToggle && <NavSub page={page} />}
        </div>
    );
}

export default Header;
