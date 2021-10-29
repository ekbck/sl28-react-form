import React from 'react'

import './Popup.css';

function Popup({counters, trigger, onClick}) {
    const totalPrice = counters.reduce((numberOfProducts, counter) => 
    numberOfProducts + counter.value * counter.price, 0 );

    return (trigger) ? ( 
        <div className="popup">
            <div className="popup-inner">
                <button className="close-button" onClick={onClick}>X</button>
                <h3>Tack för din beställning!</h3>
                <p>Total: {totalPrice} SEK</p>
            </div>
        </div>
    ) : "";
}

export default Popup
