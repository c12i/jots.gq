import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'

import NoteFeed from '../components/NoteFeed'
import Center from '../components/Center'
import Loader from '../components/Loader'
import { MY_NOTES } from '../gql/query'

const MyNotes = () => {
    useEffect(() => {
        document.title = 'My Notes - Jots'
    })
    const { data, loading, error } = useQuery(MY_NOTES)

    if (loading) return <Loader />
    if (error) return <Center danger>Error: {error.message}</Center>

    return (
        <>
            {data.me.notes.length > 0 ? (
                <NoteFeed notes={data.me.notes} />
            ) : (
                <Center>No notes yet</Center>
            )}
        </>
    )
}

export default MyNotes
