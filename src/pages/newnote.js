import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import NoteForm from '../components/NoteForm'
import Center from '../components/Center'
import { CREATE_NOTE } from '../gql/mutation'
import { NOTE_FEED } from '../gql/query'

const NewNote = ({ history }) => {
    useEffect(() => {
        document.title = 'New Note - Jots'
    })

    const [newNote, { loading, error }] = useMutation(CREATE_NOTE, {
        onCompleted: ({ createNote }) => {
            history.push(`/notes/${createNote.id}`)
        },
        refetchQueries: [{ query: NOTE_FEED }]
    })

    return (
        <>
            {loading && <Center>Loading...</Center>}
            {error && <Center danger>Error: Something went wrong!</Center>}
            <NoteForm action={newNote} loading={loading} />
        </>
    )
}

export default NewNote
