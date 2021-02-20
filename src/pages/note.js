import React from 'react'
import { useQuery } from '@apollo/client'

import Note from '../components/Note'
import Center from '../components/Center'
import { GET_NOTE } from '../gql/query'

const NotePage = ({ match }) => {
    const id = match.params.id

    const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } })

    if (loading) return <Center>Loading...</Center>

    if (error) return <Center>Error! {error.name}</Center>

    return (
        <div>
            <Note note={data.note} />
        </div>
    )
}

export default NotePage
