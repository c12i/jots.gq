import React, { useEffect } from 'react'

const SignIn = props => {
    useEffect(() => {
        document.title = 'Sign In — Jots'
    })

    return (
        <div>
            <p>hello from signin page</p>
        </div>
    )
}

export default SignIn
