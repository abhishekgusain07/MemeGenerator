import React, { useEffect, useState } from "react";
import memesData from "../memesData";
export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    // using useEffect to fetch data from api, and setting it to "allMeme" state
    
    // =========================================first method================================
    // in this first method we cannot use async because asycn function always returns a promise and but we want to return another function in cleanup 

    const[allMeme, setAllMeme] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.imgflip.com/get_memes")
    //     .then(res => res.json())
    //     .then(data => setAllMeme(data.data.memes));
    // },[])

    // ========================================second method================================
    useEffect(()=>{
        const getMemeDataFromApi = async() => {
            const result = await fetch("https://api.imgflip.com/get_memes")
            const data = await result.json()
            setAllMeme(data.data.memes)
        }
        getMemeDataFromApi()
    },[])

    function getImage(){
        const memesArray = allMeme
        const random = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    // dealing with the change when we type in input fields
    function handleTextChange(event) {
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]:value
        }))
    }
    return(
        <main>
            <div className="form">
                <input type="text" 
                className="form--input" 
                placeholder="Top text" 
                name="topText"
                value = {meme.topText}
                onChange={handleTextChange}
                />

                <input 
                className="form--input" 
                type="text" 
                placeholder="Bottom text"
                name="bottomText"
                value = {meme.bottomText}
                onChange={handleTextChange}
                />

                <button onClick = {getImage} className="form--button">Get a new image</button>
            </div>
            <div className="meme">
                <img className="meme--image" src = {meme.randomImage}></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}