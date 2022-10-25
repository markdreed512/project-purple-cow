import React, { useState } from 'react'

function Counter(props) {
    const [ count, setCount ] = useState(0)
    const incrementCount = () => {
        console.log("incrementing...")
    }
    return (
        <div className="counter-container">
            <button onClick={incrementCount}>{props.buttonText}</button>
            <div className="count">{count}</div>
        </div>
    )
}

export default Counter