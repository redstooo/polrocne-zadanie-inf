import React, {useState} from "react"

function Counter(){

    const [number, setNumber] = useState(0);

    const numDown = () => {
        setNumber(number - 1);
    }

    const numUp = () => {
        setNumber(number + 1);
    }

    const numReset = () => {
        setNumber(0);
    }

    return(
        <div className="counter-container">
            <h1 className="number-shower">{number}</h1>
            <button className="counter-button" onClick={numDown}>Decrease</button>
            <button className="counter-button" onClick={numReset}>Reset</button>
            <button className="counter-button" onClick={numUp}>Increase</button>
        </div>
    );

}

export default Counter