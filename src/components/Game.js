import Top from "./Top";
import Fleshcards from "./Fleshcards";
import Footer from "./Footer";
import styled from "styled-components";
import { useState } from "react";

export default function Game() {
    const [total, setTotal] = useState(0)
    const [completed, setCompleted] = useState(0)

    return(
        <Container>
            <Top />
            <Fleshcards />
            <Footer total={total} completed={completed} />
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