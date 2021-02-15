import React from 'react'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client'

import NoteFeed from '../components/NoteFeed'
import Button from '../components/Button'

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

    const handleFetchMore = () => {
        fetchMore({
            variables: { cursor: data.noteFeed.cursor },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                return {
                    noteFeed: {
                        cursor: fetchMoreResult.noteFeed.cursor,
                        hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                        notes: [
                            ...previousResult.noteFeed.notes,
                            ...fetchMoreResult.noteFeed.notes
                        ],
                        _typename: 'noteFeed'
                    }
                }
            }
        })
    }

    return (
        <>
            <NoteFeed notes={data.noteFeed.notes} />
            {data.noteFeed.hasNextPage && (
                <Button onClick={handleFetchMore}>Load more</Button>
            )}
        </>
    )
}

export default Home
