import React, { useState } from 'react'
import image from '../images/user.jpg'
import filledStar from '../images/star.png'
import emptyStar from '../images/emptyStart.jpg'
import Star from './Star'
export default function Testing3() {
    const [contact, setContact] = useState({
        firstName: "Abhishek",
        lastName: "Gusain",
        phone: "+91 8279524659",
        emai: "abhishek.gusain1007fb@gmail.com",
        isFavourite: true
    })
    function toggleFav(){
        setContact(prevContact => {
            return{...prevContact,
            isFavourite: !prevContact.isFavourite
            }
        })
    }
    // the above can also be written as 
    // function toggleFav() {
    //     setContact(prevContact => ({
    //         ...prevContact,
    //         isFavourite: !prevContact.isFavourite
    //     }))
    // }
    return(
        <div>
            <div className='card'>
                <img className='card--image' src={image} alt="abhi"/>
                <div className='card--info'>
                    <Star handleClick = {toggleFav} isFilled = {contact.isFavourite} />
                    <h2 className='card--name'>{contact.firstName} {contact.lastName}</h2>
                    <p className='card--contact'>{contact.phone}</p>
                    <p className='card--contact'>{contact.emai}</p>
                </div>
            </div>
        </div>
    )
}