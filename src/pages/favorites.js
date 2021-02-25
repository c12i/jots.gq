import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'

import NoteFeed from '../components/NoteFeed'
import Center from '../components/Center'
import Loader from '../components/Loader'
import { MY_FAVORITES } from '../gql/query'

const Favorites = () => {
    useEffect(() => {
        document.title = 'Favorites - Jots'
    })
    const { data, loading, error } = useQuery(MY_FAVORITES)

    if (loading) return <Loader />
    if (error) return <Center danger>Error: {error.message}</Center>

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
