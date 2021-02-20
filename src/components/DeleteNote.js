import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import { useMutation } from '@apollo/client'

import Center from '../components/Center'
import { NOTE_FEED, MY_NOTES } from '../gql/query'
import { DELETE_NOTE } from '../gql/mutation'

const Trash = styled(FaTrashAlt)`
    color: #f5222d;
    cursor: pointer;

    :hover {
        color: #cf1322;
    }
`

const DeleteNote = ({ noteId, history }) => {
    const [deleteNote, { loading, error }] = useMutation(DELETE_NOTE, {
        refetchQueries: [{ query: NOTE_FEED }, { query: MY_NOTES }],
        onCompleted: () => history.push('/mynotes')
    })

    if (loading) return <Center>Loading...</Center>
    if (error) return <Center danger>Error! {error.name}</Center>

    return (
        <Trash
            onClick={() => {
                deleteNote({ variables: { id: noteId } })
            }}
        />
    )
}

export default withRouter(DeleteNote)
