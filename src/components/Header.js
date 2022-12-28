import React from 'react'
export default function Header() {
    return(
        <header className='header'>
        <div className='leftside'>
            <img src = {require("../images/trollFace.png")} className='header--image'></img>
            <h2 className='header-tittle'>Meme Generator</h2>
            </div>
            <div className='rightside'>
            <h4 className='header--project'>React course - project 3</h4>
            </div>
        </header>
    )
}