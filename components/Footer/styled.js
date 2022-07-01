import styled from 'styled-components'

export const Wrapper = styled.footer`
    width: 100%;
    height: 250px;
    background-color: #2A2A2A;
    color: #F4F4F4;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1300px) {
        padding-left: calc((100vw - 1200px)/2);
        padding-right: calc((100vw - 1200px)/2);
    }
`