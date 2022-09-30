import Top from "./Top";
import Fleshcards from "./Fleshcards";
import Footer from "./Footer";
import styled from "styled-components";

export default function Game() {

    return(
        <Container>
            <Top />
            <Fleshcards />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FB6B6B;

    display: flex;
    justify-content: center;
`