import React from 'react'
import styled from 'styled-components'

const NotFoundText = styled.p`
    text-align: center;
`

const NotFound = () => {
    return (
        <NotFoundText>
            404: The post you requested could not be found
        </NotFoundText>
    )
}

export default NotFound
