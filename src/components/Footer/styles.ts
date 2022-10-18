import styled from "styled-components";

const containerFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    height: 4rem;
    width: 100vw;

    a {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: bold;
        font-size: 1.2rem;
        text-decoration: none;
        color: #2E58FF;

        .icon {
            margin-left: 0.5rem;
        }
    }
    
`

export default {
    containerFooter
}