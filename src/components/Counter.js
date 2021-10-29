import React from "react";

function Counter({counter, onDecrement, onIncrement}) {
    return (
        <div className="counter-body">
            <span className="counter-info">
                <p>{counter.id} {counter.grams} g</p>
                <p className="counter-price">{counter.price} SEK</p>
            </span>
            <span className="counter-interactive">
                {counter.value > 0 ? <button class="counter-button" onClick={() => onDecrement(counter)}>-</button> : " "}
                <p className="counter-value">{counter.value}</p>
                <button class="counter-button" onClick={() => onIncrement(counter)}>+</button>
            </span>
        </div>
    );
}

export default Counter;