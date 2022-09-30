import { useState } from "react";
import styled from "styled-components";

import Top from "./Top";
import Fleshcards from "./Fleshcards";
import Footer from "./Footer";

import { ReactDeck } from "./Decks";

export default function Game() {
    const [total] = useState(ReactDeck.length)
    const [completed, setCompleted] = useState(0)

    const deck = ReactDeck;

    return(
        <Container>
            <Top />
            <Fleshcards deck={deck}/>
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