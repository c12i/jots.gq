import React from 'react'
import { useQuery, useMutation } from '@apollo/client'

import Center from '../components/Center'
import NoteForm from '../components/NoteForm'
import { GET_NOTE } from '../gql/query'
import { UPDATE_NOTE } from '../gql/mutation'

const EditNote = ({ match, history }) => {
    const { data, loading, error } = useQuery(GET_NOTE, {
        variables: { id: match.params.id }
    })
    const [updateNote] = useMutation(UPDATE_NOTE, {
        variables: { id: match.params.id },
        onCompleted: ({ updateNote }) => {
            history.push(`/notes/${updateNote.id}`)
        }
    })

    if (loading) return <Center>Loading...</Center>

    if (error) return <Center>Error! {error.name}</Center>

    return <NoteForm content={data.note.content} action={updateNote} />
}

export default EditNote
