import styled from 'styled-components'

export const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    a, ul, li {
        text-decoration: none;
        list-style: none;
        color: #CCC;
        font-weight: bold;
    }

    ul {
        display: flex;

        a {
            margin-left: 20px;
        }
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;

    p {
        color: #ccc;
        font-size: 22px;
        font-weight: bold;
        margin-left: 10px;
    }
`