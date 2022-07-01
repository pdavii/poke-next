import styled from 'styled-components'

export const Wrapper = styled.header`
    width: 100%;
    height: 70px;
    background-color: #2A2A2A;
    padding: 0 20px;
    display: flex;
    align-items: center;

    @media (min-width: 1300px) {
        padding-left: calc((100vw - 1200px)/2);
        padding-right: calc((100vw - 1200px)/2);
    }
`