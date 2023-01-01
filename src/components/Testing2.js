import React, { useState } from 'react'
export default function Testing2(){
    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
    function addNewItem(){
        setThingsArray(prevThingsArray => {
            return([...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])
        })
    }
    const newArray = thingsArray.map(value => 
          <p key={value}>{value}</p>  
    )
    return(
        <div className='testing2'>
            <button onClick ={addNewItem} className='primary-btn'>Add Item</button>
            {newArray}
        </div>
    )
}