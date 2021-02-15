import styled from 'styled-components'

const Button = styled.button`
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
`

export default Button
