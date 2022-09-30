import styled from "styled-components";
import logo from "../images/logo.png";

export default function Top() {
    return(
        <TopGame>
            <Image src={logo} alt="logo" />
            <Title>ZapRecall</Title>
        </TopGame>
    )
}

const TopGame = styled.div`
    width: 100vw;
    height: 100px;
    padding: 0 5vw;
    background-color: #FB6B6B;

    display: flex;
    justify-content: space-around;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 1;
`

const Title = styled.h1`
    margin: 20px 0;

    font-family: 'Righteous', cursive;
    font-size: 36px;
    color: #FFFFFF;
`

const Image = styled.img`
    height: 80%;
`