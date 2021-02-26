import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import Center from '../components/Center'
import UserForm from '../components/UserForm'
import { SIGN_UP, SET_CURRENT_USER } from '../gql/mutation'

const SignUp = ({ history }) => {
    useEffect(() => {
        document.title = 'Sign Up - Jots'
    })

    const [setCurrentUser] = useMutation(SET_CURRENT_USER)
    const [signUp, { loading, error }] = useMutation(SIGN_UP, {
        onCompleted: ({ signUp }) => {
            localStorage.setItem('token', signUp.token)
            setCurrentUser({ variables: { user: signUp.user } })
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
