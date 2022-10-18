import styled from "styled-components";

const header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    width: 100vw;
`

const wrapLogoNav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50rem;
    margin-left: 1rem;
`

const logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 9rem;

    img {
        height: 2rem;
        width: 2rem;
    }

    p {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'Space Grotesk', sans-serif;
        color: #2E58FF;
    }
`

const navBar = styled.nav`
    display: flex;
    align-items: center;
    width: 36rem;

    ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    a {
        text-decoration: none;
        font-size: 1.3rem;
        font-family: 'Space Grotesk', sans-serif;
        color: #2E58FF;
    
        &:hover {
            color: #2E58FF95;
        }
    }
`

const connect = styled.button`
    width: fit-content;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin-right: 1.5rem;
    background-color: #2E58FF;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
        background-color: #2E58FF95;
    }
`

export default {
    header,
    wrapLogoNav,
    logo,
    navBar,
    connect
}