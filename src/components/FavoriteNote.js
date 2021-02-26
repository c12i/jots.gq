import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { FaStar } from 'react-icons/fa'

import Button from '../components/Button'
import { TOGGLE_FAVORITE } from '../gql/mutation'
import { NOTE_FEED, MY_FAVORITES, GET_ME } from '../gql/query'

const FavoriteNote = ({ me, favoriteCount, noteId }) => {
    const [count, setCount] = useState(favoriteCount)
    const [favorited, setFavorited] = useState(
        me.favorites.some(note => note.id === noteId)
    )

    const { data } = useQuery(GET_ME)

    const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
        variables: { id: noteId },
        refetchQueries: [{ query: NOTE_FEED }, { query: MY_FAVORITES }]
    })

    useEffect(() => {
        setFavorited(data.me.favorites.some(note => note.id === noteId))
    }, [])

    return (
        <>
            {favorited ? (
                <Button
                    asLink
                    onClick={() => {
                        toggleFavorite()
                        setFavorited(!favorited)
                        setCount(count - 1)
                    }}
                >
                    Remove Favorite
                </Button>
            ) : (
                <Button
                    asLink
                    onClick={() => {
                        toggleFavorite()
                        setFavorited(!favorited)
                        setCount(count + 1)
                    }}
                >
                    <FaStar />
                    Add Favorite
                </Button>
            )}
            : {count}
        </>
    )
}

export default FavoriteNote
