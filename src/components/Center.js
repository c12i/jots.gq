import styled, { css } from 'styled-components'

const dangerStyles = css`
    color: #cf1322;
`

const asLinkStyles = css`
    background: none;
    color: #0077cc;
    border: none;
    padding: 0;
    font: inherit;
    text-decoration: none;
    cursor: pointer;

    :hover,
    :active {
        color: #004499;
    }
`

const getProps = ({ danger, asLink }) => {
    if (danger) {
        return dangerStyles
    } else if (asLink) {
        return asLinkStyles
    }
}

const Center = styled.p`
    text-align: center;
    ${getProps}
`

export default Center
