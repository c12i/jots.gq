import React, { useEffect } from 'react'

const MyNotes = () => {
    useEffect(() => {
        document.title = 'My Notes - notedly'
    })
    return <div>Hello from mynotes</div>
}

export default MyNotes
