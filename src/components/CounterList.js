import React from "react";
import Counter from "./Counter";

function CounterList({counters, onDecrement, onIncrement}) {

    return(
        <div className="counter-list">
            {counters.map(counter =>
            <Counter
                key={counter.id}
                onDecrement={onDecrement}
                onIncrement={onIncrement}
                counter={counter}    
            />)}
        </div>
    );
}

export default CounterList;