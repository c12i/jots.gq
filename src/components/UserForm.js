import React, { useState } from 'react'
import styled from 'styled-components'

import Button from './Button'

const Wrapper = styled.div`
    border: 1px solid #f5f4f0;
    border-radius: 5px;
    max-width: 500px;
    padding: 1.2em;
    margin: 0 auto;
`

const Form = styled.form`
    input {
        padding: 0.1em 0 0.1em 0.8em;
        border: solid #333 1px;
        border-radius: 5px;

        ::placeholder {
            opacity: 0.5;
        }
    }

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

const UserForm = ({ formType, action, loading }) => {
    const [values, setValues] = useState()

    const onChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    return (
        <Wrapper>
            {formType === 'signUp' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
            <Form
                onSubmit={event => {
                    event.preventDefault()
                    action({ variables: { input: { ...values } } })
                }}
            >
                <label htmlFor="username">Username:</label>
                <input
                    required
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    onChange={onChange}
                />
                {formType === 'signUp' && (
                    <>
                        <label htmlFor="email">Email:</label>
                        <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={onChange}
                        />
                    </>
                )}
                <label htmlFor="password">Password:</label>
                <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                />
                <Button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Submit'}
                </Button>
            </Form>
        </Wrapper>
    )
}

export default UserForm
