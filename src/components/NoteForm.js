import React, { useState } from 'react'
import styled from 'styled-components'

import Button from './Button'

const Wrapper = styled.div`
    padding-top: 5px;
    height: 100%;
`

const Form = styled.form`
    height: 100%;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 50%;
    padding: 1em;
    border: 1px solid #f5f4f0;
    overflow-y: scroll;

    ::placeholder {
        opacity: 0.5;
    }

    ::focus {
        border: solid #333 1px;
    }

    @media (min-width: 700px) {
        height: 90%;
        overflow-y: scroll;
    }
`

const NoteForm = ({ content, action, loading }) => {
    const [value, setValue] = useState({
        content: content || ''
    })

    const onChange = event => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Wrapper>
            <Form
                onSubmit={event => {
                    event.preventDefault()
                    action({
                        variables: { ...value }
                    })
                }}
            >
                <TextArea
                    required
                    type="text"
                    name="content"
                    placeholder="Note Content"
                    value={value.content}
                    onChange={onChange}
                />
                <Button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Save'}
                </Button>
            </Form>
        </Wrapper>
    )
}

export default NoteForm
