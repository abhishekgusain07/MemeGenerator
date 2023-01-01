import React, { useState } from "react";
import memesData from "../memesData";
export default function Meme(){
    const [image, setImage] = useState("")
    function getImage(){
        const memesArray = memesData.data.memes
        const random = Math.floor(Math.random() * memesArray.length);
        console.log(memesArray[random].url)
        setImage(memesArray[random].url)
    }
    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"></input>
                <input className="form--input" type="text" placeholder="Bottom text"></input>
                <button onClick = {getImage} className="form--button">Get a new image</button>
            </div>
            <div>
                <img className="meme--image" src = {image}></img>
            </div>
        </main>
    )
}