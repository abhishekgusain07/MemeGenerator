import React, { useState } from 'react'
export default function FormChallenge() {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        passwordConfirm:"",
        newsLetter: false
    })
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevState => {
            return{
                ...prevState,
                [name]:type === "checked" ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }
    return(
      <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
            <input 
                type="email"
                placeholder='Enter email address'
                name="email"
                onChange={handleChange}
                value={formData.email}
            />
            <input 
                type="password"
                placeholder='password'
                name="password"
                onChange={handleChange}
                value={formData.password}
            />
            <input
                type="password"
                placeholder='confirm password'
                name="passwordConfirm"
                onChange={handleChange}
                value={formData.passwordConfirm}
            />
            <label htmlFor='newsLetter'>I want to join the newesletter</label>
            <input 
                type='checkbox'
                name="newsLetter"
                onChange={handleChange}
                value={formData.newsLetter}
            />
            <button>submit</button>
        </form>
      </div>  
    )
}