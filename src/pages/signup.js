import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useMutation, useApolloClient } from '@apollo/client'

import Center from '../components/Center'
import UserForm from '../components/UserForm'
import { SIGN_UP } from '../gql/mutation'

const SignUp = ({ history }) => {
    useEffect(() => {
        document.title = 'Sign Up - Jots'
    })

    const client = useApolloClient()
    const [signUp, { loading, error }] = useMutation(SIGN_UP, {
        onCompleted: ({ signUp }) => {
            localStorage.setItem('token', signUp)
            client.writeData({ data: { isLoggedIn: true } })
            history.push('/')
        },
        onError: err => {
            console.error(err)
        }
    })
    return (
        <>
            {error && <Center danger>Error: Could not sign you up</Center>}
            <UserForm formType="signUp" action={signUp} loading={loading} />
        </>
    )
}

export default SignUp
