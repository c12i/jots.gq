import React from 'react'
import { useQuery, gql } from '@apollo/client'

import Note from '../components/Note'
import styled from 'styled-components'

const Center = styled.p`
    text-align: center;
`

const GET_NOTE = gql`
    query GetNote($id: ID!) {
        note(id: $id) {
            id
            createdAt
            content
            favoriteCount
            author {
                username
                id
                avatar
            }
        }
    }
`

const NotePage = ({ match }) => {
    const id = match.params.id

    const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } })

    if (loading) return <Center>Loading...</Center>

    if (error) return <Center>Error! {error.name}</Center>

    return (
        <div>
            <Note note={data.note} />
        </div>
    )
}

export default NotePage
