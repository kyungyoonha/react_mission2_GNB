import React from "react";
import { NavLink } from "react-router-dom";
import "./NavSub.css";

const routeMap = {
    page1: ["product1", "product2", "product3", "product4"],
    page2: ["about1", "about2", "about3"],
    page3: ["intro1", "intro2", "intro3", "intro4"],
    page4: ["price1", "price2", "price3", "price4"],
};

function NavSub({ open, mainPage, handleClickSubPage }) {
    if (!open) return null;
    console.log(mainPage);
    return (
        <div className="navSub">
            {routeMap[mainPage].map((sub) => (
                <NavLink
                    key={sub}
                    to={`/${mainPage}/${sub}`}
                    // className={selectedSubPage === sub ? "active" : ""}
                    activeClassName="active"
                    onClick={() => handleClickSubPage(sub)}
                >
                    {sub}
                </NavLink>
            ))}
        </div>
    );
}

export default NavSub;
