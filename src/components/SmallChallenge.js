import React, { useState } from 'react'
export default function Challenge() {
    const [messages, setMessages] = useState(["wassup", " How are you"])
    return(
        <div>
            {messages.length === 0 && <h2>you are all caught up</h2> || messages.length === 1 && <h2>you have one Message</h2> || messages.length > 1 && <h2>you have several unread messages</h2>}
        </div>
    )
}