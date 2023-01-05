import React, { useState } from 'react'
export default function NewForm() {
    const[formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })
    console.log(formData.favColor)
    
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

    // for fun only
    function submitToApi(obj) {
        console.dir(obj)
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        submitToApi(formData);
    }
    return (
        <div className='Form'>
            <form onSubmit={handleSubmit}>
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
                <br />
                <fieldset>
                    <legend>Current employement status</legend>
                    <input 
                        type = "radio"
                        id = "unemployed"
                        name = "employment"
                        value ="unemployed"
                        checked = {formData.employment === 'unemployed'}
                        onChange={handleChange}
                    />
                    <label htmlFor='unemployed'>Unemployed</label>
                    <br />
                    <input 
                        type="radio"
                        id ="Part-time"
                        name="employment"
                        value = "Part-time"
                        onChange={handleChange}
                    />
                    <label htmlFor="Part-time">part time</label>
                    <br/>
                    <input 
                        type="radio"
                        id = "Full-time"
                        name = "employment"
                        value = "Full-time"
                        onChange={handleChange}
                    /> 
                    <label htmlFor="Full-time">Full Time</label>
                    <br/>
                </fieldset>
                <br />

                <label htmlFor='favColor' > what is your fav color</label>
                <br/>
                <select 
                    id = "favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                >
                    <option value="red">red</option>
                    <option value="orange">orange</option>
                    <option value="yellow">yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">violet</option>
                </select>
                <br/><br/>
                <button>submit</button>
            </form>
        </div>
    )
}