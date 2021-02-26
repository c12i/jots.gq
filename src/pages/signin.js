import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import UserForm from '../components/UserForm'
import Center from '../components/Center'
import { SIGN_IN, SET_CURRENT_USER } from '../gql/mutation'

const SignIn = ({ history }) => {
    useEffect(() => {
        document.title = 'Sign In — Jots'
    })

    const [setCurrentUser] = useMutation(SET_CURRENT_USER)
    const [signIn, { loading, error }] = useMutation(SIGN_IN, {
        onCompleted: data => {
            localStorage.setItem('token', data.signIn.token)
            setCurrentUser({ variables: { user: data.signIn.user } })
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
