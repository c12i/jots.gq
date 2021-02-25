import styled from 'styled-components'

const Loader = styled.div`
    height: 0;
    width: 0;
    padding: 15px;
    border: 6px solid #ccc;
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
        position: absolute;
        left: 50%;
        top: 30%;
    }
`

export default Loader
