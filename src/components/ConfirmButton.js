import React from 'react';

function ConfirmButton({counters, onClick}) {
    const totalPrice = counters.reduce((numberOfProducts, counter) => 
    numberOfProducts + counter.value * counter.price, 0 );

    return(
        <button disabled={totalPrice === 0} className="confirm-button" onClick={onClick}>Beställ {totalPrice} SEK</button>
    );
} 

export default ConfirmButton;