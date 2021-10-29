import React from "react";

function NavBar({counters}) {

    const totalProducts = counters.reduce((numberOfProducts, counter) => numberOfProducts + counter.value, 0);

    return (
        <div className="header">
                <h1 className="header-text">SL 28</h1>
                <h1 className="header-text">{totalProducts}</h1>

        </div>
    );
}

export default NavBar;