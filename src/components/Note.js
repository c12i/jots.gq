import React from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { format } from 'date-fns'

import UserNote from '../components/UserNote'
import Center from '../components/Center'
import { IS_LOGGED_IN } from '../gql/query'

const StyledNote = styled.article`
    max-width: 800px;
    margin: 0 auto;
`

const Metadata = styled.div`
    @media (min-width: 500px) {
        display: flex;
        align-items: top;
    }
`

const MetaInfo = styled.div`
    padding-right: 1em;
`

const UserActions = styled.div`
    margin-left: auto;
`

const Img = styled.img`
    border-radius: 50%;
    box-shadow: 0 0 0 1px #888888;
    border-style: none;
`

const BoldLink = styled(Link)`
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    :hover,
    :active {
        color: #004499;
    }
`

const Note = ({ note }) => {
    const { data, loading, error } = useQuery(IS_LOGGED_IN)

    if (loading) return <Center>Loading...</Center>
    if (error) return <Center>Error! {error.name}</Center>

    return (
        <StyledNote>
            <Metadata>
                <MetaInfo>
                    <Img
                        src={note.author.avatar}
                        alt={`${note.author.username} avatar`}
                        height="50px"
                    />
                </MetaInfo>
                <MetaInfo>
                    <em>by </em>
                    <BoldLink to={`/users/${note.author.username}`}>
                        {note.author.username}
                    </BoldLink>{' '}
                    <br /> {format(note.createdAt, 'MMM Do YYYY')}
                </MetaInfo>
                <UserActions>
                    {data.isLoggedIn ? (
                        <UserNote note={note} />
                    ) : (
                        <>
                            <em>Favorites: </em>
                            {note.favoriteCount}
                        </>
                    )}
                </UserActions>
            </Metadata>
            <ReactMarkdown source={note.content} />
        </StyledNote>
    )
}

export default Note
