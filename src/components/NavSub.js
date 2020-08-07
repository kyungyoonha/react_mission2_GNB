import React from "react";
import { NavLink } from "react-router-dom";

const routeMap = {
    page1: ["product1", "product2", "product3", "product4"],
    page2: ["about1", "about2", "about3"],
    page3: ["intro1", "intro2", "intro3", "intro4"],
    page4: ["price1", "price2", "price3", "price4"],
};

function NavSub({ page }) {
    console.log("navsub");
    return (
        <div className="navSub">
            {routeMap[page].map((sub) => (
                <NavLink
                    key={sub}
                    to={`/${page}/${sub}`}
                    activeClassName="active"
                >
                    {sub}
                </NavLink>
            ))}
        </div>
    );
}

export default NavSub;
