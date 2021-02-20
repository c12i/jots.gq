import { gql } from '@apollo/client'

const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
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

const NOTE_FEED = gql`
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

export { IS_LOGGED_IN, GET_NOTE, NOTE_FEED }
