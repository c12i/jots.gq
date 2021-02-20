import { gql } from '@apollo/client'

const SIGN_IN = gql`
    mutation SignIn($input: SignInInput!) {
        signIn(input: $input)
    }
`

const SIGN_UP = gql`
    mutation SignUp($input: SignUpInput!) {
        signUp(input: $input)
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

export { SIGN_IN, SIGN_UP, CREATE_NOTE }
