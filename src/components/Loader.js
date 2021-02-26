import styled, { css } from 'styled-components'

const centerPositionStyles = css`
    position: absolute;
    left: 50%;
    top: 30%;
`

const smallSizedStyles = css`
    padding: 10px;
    border: solid 4px #ccc;
`

const normalSizedStyles = css`
    padding: 15px;
    border: 6px solid #ccc;
`

const getMidProps = ({ center }) => {
    if (!center) {
        return centerPositionStyles
    }
}

const getSizeProps = ({ small }) => {
    if (!small) {
        return normalSizedStyles
    } else {
        return smallSizedStyles
    }
}

const Loader = styled.div`
    height: 0;
    width: 0;
    ${getSizeProps}
    border-right-color: #888;
    border-radius: 22px;
    -webkit-animation: rotate 1s infinite linear;
    margin: 0 auto;

    @keyframes rotate {
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @media (min-width: 700px) {
        ${getMidProps}
    }
`

export default Loader
