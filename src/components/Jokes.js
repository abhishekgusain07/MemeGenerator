import React from 'react'
import jokesData  from './jokesData'
import Joke from './Joke'
export default function Jokes() {
    const jokeElement = jokesData.map(particularJoke => {
        return <Joke
            setup = {particularJoke.setup}
            punchline = {particularJoke.punchline}
        />
    })
    return(
        <div>
            {jokeElement}
        </div>
    )
}