import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'

import NoteFeed from '../components/NoteFeed'
import Center from '../components/Center'
import Loader from '../components/Loader'
import { NOTE_FEED } from '../gql/query'

const Home = () => {
    useEffect(() => {
        document.title = 'Home - Jots'
    })

    const { data, loading, error, fetchMore } = useQuery(NOTE_FEED)

    if (loading) return <Loader />
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
                <Center asLink onClick={handleFetchMore}>
                    {loading ? 'Loading...' : 'Load More'}
                </Center>
            )}
        </>
    )
}

export default Home
