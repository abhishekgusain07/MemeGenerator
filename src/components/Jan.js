import React , { useState } from 'react'
import Boxes from './Boxes'
import Box from './Box'
export default function Jan() {
    const [element, setElement] = useState(Boxes)
    function changeColor(id) {
        setElement((prevArray) => {
            const newArray = []
            for(let i = 0; i < prevArray.length; ++i) {
                const currentVal = prevArray[i];
                if(currentVal.id === id) {
                    const updatedVal = {
                        ...currentVal,
                        on: !currentVal.on
                    }
                    newArray.push(updatedVal)
                } else {
                    newArray.push(currentVal)
                }
            }
            return newArray
        })
    }
    const newElement = element.map((item) => (
        <Box key={item.id} id={item.id} on={item.on} handleClick = {changeColor}/>
    ))
    return(
        <div>
            <h2>Here are the boxes</h2>
            {newElement}
        </div>
    )
}