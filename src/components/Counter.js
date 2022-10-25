import React, { useState } from 'react'
import countapi from 'countapi-js'

function Counter(props) {
    const [ count, setCount ] = useState(0)
    const incrementCount = () => {
        countapi.hit('fearless.tech', '1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
            .then((result) => {
                console.log(result)
                setCount(result.value)
            })
    }
    return (
        <div className="counter-container">
            <button onClick={incrementCount}>{props.buttonText}</button>
            <div className="count">{count}</div>
        </div>
    )
}
console.log("test")

export default Counter