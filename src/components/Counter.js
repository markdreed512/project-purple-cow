import React, { useState, useEffect } from 'react'
import countapi from 'countapi-js'

function Counter(props) {
    const [ count, setCount ] = useState("")
    // useGetInitialCount gets current value on page load without incrementing count
    const useGetInitialCount = () => {
        useEffect(() => {
            countapi.get('fearless.tech', '1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
            .then((result) => {
                setCount(result.value)
            })
        }, [])
    }
    useGetInitialCount()
    
    // incrementCount gets called on every button click
    const incrementCount = () => {
        countapi.hit('fearless.tech', '1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
            .then((result) => {
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