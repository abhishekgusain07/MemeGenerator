import React, { useState } from 'react'
import image from '../images/user.jpg'
import star from '../images/star.png'
import emptyStar from '../images/emptyStart.jpg'
export default function Testing3() {
    const [contact, setContact] = useState({
        firstName: "Abhishek",
        lastName: "Gusain",
        phone: "+91 8279524659",
        emai: "abhishek.gusain1007fb@gmail.com",
        isFavourite: false
    })
    return(
        <div>
            <div className='card'>
                <img className='card--image' src={image} alt="abhi"/>
                <div className='card--info'>
                    <img src={star} alt="star"/>
                    <h2 className='card--name'>{contact.firstName} {contact.lastName}</h2>
                    <p className='card--contact'>{contact.phone}</p>
                    <p className='card--contact'>{contact.emai}</p>
                </div>
            </div>
        </div>
    )
}