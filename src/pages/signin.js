import React, { useEffect } from 'react'
import { useApolloClient, useMutation } from '@apollo/client'

import UserForm from '../components/UserForm'
import Center from '../components/Center'
import { GET_ME } from '../gql/query'
import { SIGN_IN } from '../gql/mutation'

const SignIn = ({ history }) => {
    useEffect(() => {
        document.title = 'Sign In — Jots'
    })

    const client = useApolloClient()
    const [signIn, { loading, error }] = useMutation(SIGN_IN, {
        onCompleted: data => {
            localStorage.setItem('token', data.signIn.token)
            client.writeData({ data: { isLoggedIn: true } })
            history.push('/')
        },
        refetchQueries: [{ query: GET_ME }]
    })

    return (
        <div>
            {error && <Center danger>Error: Could not sign you in</Center>}
            <UserForm action={signIn} loading={loading} />
        </div>
    )
}

export default SignIn
