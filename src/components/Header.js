import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to="/product1">Product1</Link>
            <Link to="/product2">Product2</Link>
            <Link to="/product3">Product3</Link>
            <Link to="/product4">Product4</Link>
        </div>
    );
}

export default Header;
