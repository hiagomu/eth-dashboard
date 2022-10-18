import styled from 'styled-components'

const main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

const welcomeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    height: 100%;

    img {
        height: 22rem;
        width: 22rem;
    }
`

const welcomeTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: bold;
    
    h1 {
        font-size: 3rem;
        color: #2E58FF;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 1.5rem;
        color: gray;
        margin-bottom: 2rem;
        width: 30rem;
    }

    button {
        display: flex;
        align-items: center;
        width: fit-content;
        height: 3rem;
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        margin-right: 1.5rem;
        background-color: #2E58FF;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;

        .icon {
            margin-left: 1rem;
            font-weight: bold;
        }

        &:hover {
            background-color: #2E58FF95;
        }
    }
`

export default {
    main,
    welcomeWrapper,
    welcomeTextWrapper
}