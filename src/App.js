import React, {useState} from 'react'

import './styles.css';

import ConfirmButton from "./components/ConfirmButton";
import CounterList from "./components/CounterList";
import NavBar from "./components/NavBar";
import Popup from "./components/Popup";

function App() {
    
    const initialCounters = [
        { id: "Espresso", grams: 500, price: 210, value: 0 },
        { id: "Filter", grams: 250, price: 160, value: 0 },
        { id: "Cascara", grams: 100, price: 135, value: 0 },
        { id: "Cafetto", grams: 1000, price:250, value: 0 }
    ]
    const [counters, setCounters] = useState(initialCounters)
    const [showPopup, setShowPopup] = useState(false)

    const handleDecrement = counter => {
        const updatedCounters = [...counters];
        const index = counters.indexOf(counter);
        updatedCounters[index] = { ...counter };
        updatedCounters[index].value--;
        setCounters(updatedCounters)
    };

    const handleIncrement = counter => {
        const updatedCounters = [...counters];
        const index = counters.indexOf(counter);
        updatedCounters[index] = { ...counter };
        updatedCounters[index].value++;
        setCounters(updatedCounters)
    };

    const handleExitPopup = () => {
        const resetedCounters = [...counters];
        resetedCounters.map(counter => counter.value = 0);
        setCounters(resetedCounters);
        setShowPopup(false);
    }

    return (
        <div className="app-body">
        <NavBar counters={counters} />
          <main className="form-container">
            <CounterList
                counters={counters}
                onDecrement={handleDecrement}
                onIncrement={handleIncrement}
            />
            <ConfirmButton
            counters={counters}
            onClick={() => setShowPopup(true)}
             />
            <Popup
            counters={counters} 
            trigger={showPopup} 
            onClick={handleExitPopup}></Popup>
          </main>
      </div>
    )
}

export default App
