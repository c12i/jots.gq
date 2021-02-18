import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMutation, useApolloClient, gql } from '@apollo/client'

import Center from '../components/Center'
import UserForm from '../components/UserForm'

const Wrapper = styled.div`
    border: 1px solid #f5f4f0;
    max-width: 500px;
    padding: 1em;
    margin: 0 auto;
`

const Form = styled.form`
    label,
    input {
        display: block;
        line-height: 2em;
    }

    input {
        width: 100%;
        margin-bottom: 1em;
    }
`

const SIGN_UP = gql`
    mutation SignUp($input: SignUpInput!) {
        signUp(input: $input)
    }
`

const SignUp = ({ history }) => {
    const [values, setValues] = useState()

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
        <Wrapper>
            {error && <Center danger>Error: Could not sign you up</Center>}
            <UserForm formType="signUp" action={signUp} loading={loading} />
        </Wrapper>
    )
}

export default SignUp
