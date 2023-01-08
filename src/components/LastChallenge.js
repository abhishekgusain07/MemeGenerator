import React, { useState } from 'react'
import LastNavbar from './LastNavbar'
import LastMain from './LastMain'

const LastChallenge = () => {
    const [theme, setTheme] = useState(true)
    const changeTheme = () => {
        setTheme(prevTheme => !prevTheme)
    }
    return (
        <div className='LastContainer' >
            <LastNavbar 
                theme = {theme}
                handleClick = {changeTheme}
            />
            <LastMain 
                theme = {theme}
            />
        </div>
    )
}
export default LastChallenge;