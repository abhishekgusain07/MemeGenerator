import React from 'react'
const LastMain = (props) => {
    return (
        <main className = {props.theme ? "light" : "dark"}>
            <h1 className='main--title'>Fun facts about react</h1>
            <ul className='main--facts'>
                <li>Was first released in 2013</li>
                <li>was originally created by jordan walker</li>
                <li>Has well over 100k starts on github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousand of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}
export default LastMain;