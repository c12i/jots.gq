import React from 'react'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client'
import NoteFeed from '../components/NoteFeed'

const Center = styled.p`
    text-align: center;
`

const GET_NOTES = gql`
    query NoteFeed($cursor: String) {
        noteFeed(cursor: $cursor) {
            cursor
            hasNextPage
            notes {
                id
                createdAt
                content
                favoriteCount
                author {
                    id
                    username
                    avatar
                }
            }
        }
    }
`

const Home = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES)

    if (loading) return <Center>Loading...</Center>
    if (error) return <Center>Error: {error.name}</Center>

    return <NoteFeed notes={data.noteFeed.notes} />
}

export default Home
