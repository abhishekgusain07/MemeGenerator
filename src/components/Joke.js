import React, { useState } from 'react'
export default function Joke(props) {
    const [isShown , setIsShown] = useState(false)
    function Toggle() {
        setIsShown(prevState => !prevState)
    }
    const ButtonText = isShown ? "Hide Punchline" : "Show Punchline"
    return(
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick = {Toggle}>{ButtonText}</button> 
            <hr/>
        </div>
    )
}