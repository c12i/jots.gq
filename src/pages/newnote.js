import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import NoteForm from '../components/NoteForm'
import Loader from '../components/Loader'
import { CREATE_NOTE } from '../gql/mutation'
import { NOTE_FEED, MY_NOTES } from '../gql/query'

const NewNote = ({ history }) => {
    useEffect(() => {
        document.title = 'New Note - Jots'
    })

    const [newNote, { loading, error }] = useMutation(CREATE_NOTE, {
        onCompleted: ({ createNote }) => {
            history.push(`/notes/${createNote.id}`)
        },
        refetchQueries: [{ query: NOTE_FEED }, { query: MY_NOTES }]
    })

    return (
        <>
            {loading && <Loader center small />}
            {error && <Center danger>Error: Something went wrong!</Center>}
            <NoteForm action={newNote} loading={loading} />
        </>
    )
}

export default NewNote
