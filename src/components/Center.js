import styled, { css } from 'styled-components'

const dangerStyles = css`
    color: #cf1322;
`

const getProps = ({ danger }) => {
    if (danger) {
        return dangerStyles
    }
}

const Center = styled.p`
    text-align: center;
    ${getProps}
`

export default Center
