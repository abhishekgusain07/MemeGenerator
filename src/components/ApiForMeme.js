// the whole idea of doing this is because we are still importing setup and punchline of jokes from the local file when we want to import it from some API
import React, { useState } from "react";
export default function ApiFromMeme() {
    const [starWarsData, setStarWarsData] = useState({})
    // How to take data from API
    // 1. GET the data (fetch)
    // 2. save the data to state.


    console.log('rendering')
    // the below code will lead to side effect
    // fetch("https://swapi.dev/api/people/1").then(res => res.json()).then(data => setStarWarsData(data))

    fetch('https://swapi.dev/api/people/1').then(res => res.json()).then(data => console.log(data))

    // here we are seeing infinite rendering in our console becuase what is happenening is 
    // we are rendering the componene "ApiForMeme" then it is fetchind and after is is fetched it is updating state which make the componenet re-render and when component re-renders it again update the state and this cycle keeps going on.
    // this is the sideeffect and to conquer this we use "USEEFFECT"

    return(
        <div>
            <h1>Fetched from api</h1>
            <pre>{JSON.stringify(starWarsData, null ,2)}</pre>
        </div>
    )
}