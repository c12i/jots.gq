import React, { useEffect } from 'react'

const Favorites = () => {
    useEffect(() => {
        document.title = 'Favorites - notedly'
    })
    return <div>Hello from favorites</div>
}

export default Favorites
