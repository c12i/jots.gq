import React from 'react'
import { useQuery } from '@apollo/client'

import NoteFeed from '../components/NoteFeed'
import Center from '../components/Center'
import { USER_NOTES } from '../gql/query'

const UserNotes = ({ match }) => {
    const { data, loading, error } = useQuery(USER_NOTES, {
        variables: { username: match.params.username }
    })

    if (loading) return <Center>Loading...</Center>
    if (error) return <Center danger>Error: Something went wrong</Center>

    return (
        <>
            {data.user.notes.length > 0 ? (
                <NoteFeed notes={data.user.notes} />
            ) : (
                <Center>No notes</Center>
            )}
        </>
    )
}

export default UserNotes
