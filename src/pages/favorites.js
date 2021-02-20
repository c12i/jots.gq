import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'

import NoteFeed from '../components/NoteFeed'
import Center from '../components/Center'
import { MY_FAVORITES } from '../gql/query'

const Favorites = () => {
    useEffect(() => {
        document.title = 'Favorites - Jots'
    })
    const { data, loading, error } = useQuery(MY_FAVORITES)

    if (loading) return <Center>Loading...</Center>
    if (error) return <Center danger>Error: Something went wrong</Center>

    return (
        <>
            {data.me.favorites.length > 0 ? (
                <NoteFeed notes={data.me.favorites} />
            ) : (
                <Center>No favorites yet</Center>
            )}
        </>
    )
}

export default Favorites
