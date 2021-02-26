import React from 'react'
import styled from 'styled-components'
import { FaEdit } from 'react-icons/fa'
import { useQuery } from '@apollo/client'
import { Link as DefaultLink } from 'react-router-dom'

import Center from '../components/Center'
import DeleteNote from '../components/DeleteNote'
import FavoriteNote from '../components/FavoriteNote'
import { CURRENT_USER } from '../gql/query'

const Link = styled(DefaultLink)`
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    :hover,
    :active {
        color: #004499;
    }
`

const UserNote = ({ note }) => {
    const { data, loading, error } = useQuery(CURRENT_USER)

    if (loading) return <Center>Loading...</Center>
    if (error) return <Center>Error: {error.message}</Center>

    return (
        <>
            <FavoriteNote
                me={data.currentUser}
                noteId={note.id}
                favoriteCount={note.favoriteCount}
            />
            <br />
            {data.currentUser.id === note.author.id && (
                <>
                    <Link to={`/edit/${note.id}`}>
                        <FaEdit /> <em>Edit</em>
                    </Link>
                    <br />
                    <DeleteNote noteId={note.id} />
                </>
            )}
        </>
    )
}

export default UserNote
