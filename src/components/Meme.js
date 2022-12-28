import React from "react";
export default function Meme(){
    return(
        <main>
            <form className="form">
                <input type="text" className="form--input" placeholder="Top text"></input>
                <input className="form--input" type="text" placeholder="Bottom text"></input>
                <button className="form--button">Get a new image</button>
            </form>
        </main>
    )
}