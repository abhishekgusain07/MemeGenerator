import React, { useState } from "react";
import memesData from "../memesData";
export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const[allMemeImages, setAllMemeImages] = useState(memesData)
    function getImage(){
        const memesArray = memesData.data.memes
        const random = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"></input>
                <input className="form--input" type="text" placeholder="Bottom text"></input>
                <button onClick = {getImage} className="form--button">Get a new image</button>
            </div>
            <div>
                <img className="meme--image" src = {meme.randomImage}></img>
            </div>
        </main>
    )
}