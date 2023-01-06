import React, {useState} from 'react'
import WindowTrackerCopy from './WindowTrackerCopy'
const NchallengeCopy = () => {
    const [show, setShow] = useState(true)
    const toggleShow = () => {
        setShow(prevShow => !prevShow)
    }
    return(
        <div className='container'>
            <button onClick={toggleShow}>Togle WindowTracker</button>
            {show && <WindowTrackerCopy />}
        </div>
    )
}
export default NchallengeCopy;