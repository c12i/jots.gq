import { gql } from '@apollo/client'

const SIGN_IN = gql`
    mutation SignIn($input: SignInInput!) {
        signIn(input: $input) {
            token
            user {
                id
                favorites {
                    id
                }
            }
        }
    }
`

const SIGN_UP = gql`
    mutation SignUp($input: SignUpInput!) {
        signUp(input: $input) {
            token
            user {
                id
                favorites {
                    id
                }
            }
        }
    }
`

const CREATE_NOTE = gql`
    mutation CreateNote($content: String!) {
        createNote(content: $content) {
            id
            content
            createdAt
            favoriteCount
            favoritedBy {
                id
                username
            }
            author {
                username
                id
            }
        }
    }
`

const UPDATE_NOTE = gql`
    mutation UpdateNote($id: ID!, $content: String!) {
        updateNote(id: $id, content: $content) {
            id
            content
            createdAt
            favoritedBy {
                id
                username
                avatar
            }
            favoriteCount
            author {
                id
                username
                avatar
            }
        }
    }
`

const DELETE_NOTE = gql`
    mutation deleteNote($id: ID!) {
        deleteNote(id: $id)
    }
`

const TOGGLE_FAVORITE = gql`
    mutation ToggleFavorite($id: ID!) {
        toggleFavorite(id: $id) {
            favoritedBy {
                username
            }
            favoriteCount
        }
    }
`

export {
    SIGN_IN,
    SIGN_UP,
    CREATE_NOTE,
    UPDATE_NOTE,
    DELETE_NOTE,
    TOGGLE_FAVORITE
}
