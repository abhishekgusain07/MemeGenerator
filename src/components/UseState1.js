import React, { useEffect, useState } from "react"
// if we dont give second parameter to useEffect it is same as previous nothing changed

// useEffect renders after the component renders on the screen, 
// like in this case it will render one h1 is rendered on screen


const UseState1 = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log(`effect function ran`)
    },[count])
    // if we pass empty string it means it will only render the first time.
    return (
        <div>
            <h1>The count is {count}</h1>
            <button onClick = {()=>setCount(prevCount => prevCount + 1)}>Add 1</button>
        </div>
    )
}
export default UseState1;