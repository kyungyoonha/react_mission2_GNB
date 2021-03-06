import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import HeaderSub from "./HeaderSub";

function Header({ history }) {
    console.log("header");
    const currentPage = history.location.pathname.split("/")[1];

    const [page, setPage] = useState("");
    const [isToggle, setToggle] = useState(false);

    useEffect(() => {
        if (currentPage) {
            setPage(currentPage);
            setToggle(true);
        }
    }, [currentPage]);

    // page 클릭시 서브메뉴 활성화
    const onClick = (page) => {
        setToggle(true);
        setPage(page);
    };

    // 메인 로고 클릭시 홈으로
    const onClickLogo = () => {
        setToggle(false);
        setPage("");
    };
    return (
        <div className="header">
            <div className="header__Logo">
                <Link to="/" onClick={onClickLogo}>
                    GNB
                </Link>
            </div>
            {/* MAIN PAGE NAV */}
            <div className="header__navMain">
                <NavLink
                    to="/page1"
                    activeClassName="active"
                    onClick={() => onClick("page1")}
                >
                    page1
                </NavLink>
                <NavLink
                    to="/page2"
                    activeClassName="active"
                    onClick={() => onClick("page2")}
                >
                    page2
                </NavLink>
                <NavLink
                    to="/page3"
                    activeClassName="active"
                    onClick={() => onClick("page3")}
                >
                    page3
                </NavLink>
                <NavLink
                    to="/page4"
                    activeClassName="active"
                    onClick={() => onClick("page4")}
                >
                    page4
                </NavLink>
            </div>
            {/* SUB PAGE NAV */}
            {isToggle && <HeaderSub page={page} />}
        </div>
    );
}

export default Header;
