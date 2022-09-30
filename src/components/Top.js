import styled from "styled-components";
import logo from "../images/logo.png";

export default function Top() {
    return(
        <Top>
            <img src={logo} />
            <Title>ZapRecall</Title>
        </Top>
    )
}

const Top = styled.div`
    width: 100vw;
    height: 80px;
    padding: 0 5vw;

    display: flex;
    justify-content: space-around;

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