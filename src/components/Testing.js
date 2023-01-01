import React, { useState } from 'react'
export default function Testing() {
    const [answer, setAnswer] = useState(true);
    function changeIt(){
        setAnswer(prevState => !prevState)
    }
    return (
        <div onClick={changeIt}>
            <h2>should I go out tonight</h2>
            <button>click</button>
            <h1>{answer?'yes':'no'}</h1>
        </div>
    )
}
