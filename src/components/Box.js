import React from 'react'
export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "black" : "white",
        color: props.on ? "white" : "black"
    }
    return(
        <div 
        onClick={() => props.handleClick(props.id)}
        style = {styles} className='box'>
            <h2>{props.id}</h2>
        </div>
    )
}