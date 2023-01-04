import React, { useState } from 'react'
export default function NewForm() {
    const[formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true
    })
    console.log(formData)
    
    // ----------ONE WAY ---
    // function handleChange(event) {
    //     setFormData(prevFormData => {
    //         return {
    //             ...prevFormData,
    //             [event.target.name] : event.target.value
    //         }
    //     })
    // }

    // ========== OTHER WAY ======
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }
    return (
        <div className='Form'>
            <form>
                <input 
                    type="text"
                    placeholder = "First Name"
                    onChange={handleChange}
                    name = "firstName"
                    value = {formData.firstName}           
                />
                <input
                    type="text"
                    placeholder = "Last Name"
                    onChange={handleChange}
                    name = "lastName"
                    value={formData.lastName}
                />
                <input 
                    type="email"
                    placeholder='email'
                    onChange={handleChange}
                    name = 'email'
                    value = {formData.email}
                />
                <textarea 
                    value = {formData.comments}
                    placeholder = "your comments"
                    onChange={handleChange}
                    name = "comments"
                />
                <input 
                    type="checkbox"
                    id = "isFriendly"
                    name = "isFriendly"
                    checked = {formData.isFriendly}
                    onChange = {handleChange}
                />
                <label htmlFor='isFriendly'>Are you friendly ?</label>
                <br/>
            </form>
        </div>
    )
}