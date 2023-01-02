import React from 'react'
export default function Star(props) {
    let starIcon = props.isFilled === true ?  "star.png" : "emptyStart.jpg";
    return(
        <div>
            <img onClick = {props.handleClick} className = 'star--image' src={require(`../images/${starIcon}`)} alt="star"/>
        </div>
    )
}