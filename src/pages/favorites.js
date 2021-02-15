import React, { useEffect } from 'react'

const Favorites = () => {
    useEffect(() => {
        document.title = 'Favorites - Jots'
    })
    return <div>Hello from favorites</div>
}

export default Favorites
