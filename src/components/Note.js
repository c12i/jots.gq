import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { format } from 'date-fns'

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

const Note = ({ note }) => {
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
                    {note.author.username} <br />{' '}
                    {format(note.createdAt, 'MMM Do YYYY')}
                </MetaInfo>
                <UserActions>
                    <em>Favorites: </em>
                    {note.favoriteCount}
                </UserActions>
            </Metadata>
            <ReactMarkdown source={note.content} />
        </StyledNote>
    )
}

export default Note
