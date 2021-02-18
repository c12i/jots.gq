import React, { useEffect } from 'react'
import { useApolloClient, useMutation, gql } from '@apollo/client'

import UserForm from '../components/UserForm'
import Center from '../components/Center'

const SIGN_IN_USER = gql`
    mutation($input: SignInInput!) {
        signIn(input: $input)
    }
`

const SignIn = ({ history }) => {
    useEffect(() => {
        document.title = 'Sign In — Jots'
    })

    const client = useApolloClient()
    const [signIn, { loading, error }] = useMutation(SIGN_IN_USER, {
        onCompleted: data => {
            localStorage.setItem('token', data.signIn)
            client.writeData({ data: { isLoggedIn: true } })
            history.push('/')
        }
    })

    return (
        <div>
            {error && <Center danger>Error: Could not sign you in</Center>}
            <UserForm action={signIn} loading={loading} />
        </div>
    )
}

export default SignIn
