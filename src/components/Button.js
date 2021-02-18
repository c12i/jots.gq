import styled, { css } from 'styled-components'

const baseButtonStyles = css`
    display: block;
    padding: 8px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    border: solid #333 1px;
    background-color: #fff;
    cursor: pointer;

    :hover {
        opacity: 0.8;
        background-color: #000;
        color: #fff;
    }

    :active {
        background-color: #005fa3;
    }

    &[disabled] {
        background: #fff;
        color: #333;
    }
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

const getProps = ({ asLink }) => {
    if (asLink) {
        return asLinkStyles
    } else {
        return baseButtonStyles
    }
}

const Button = styled.button`
    ${getProps}
`

export default Button
