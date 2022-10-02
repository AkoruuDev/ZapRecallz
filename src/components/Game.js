import { useState } from "react";
import styled from "styled-components";

import Top from "./Top";
import Fleshcards from "./Fleshcards";
import Footer from "./Footer";

import { ReactDeck } from "./Decks";

export default function Game() {
    const [total] = useState(ReactDeck.length)
    const [completed, setCompleted] = useState(0)
    const [row, setRow] = useState([]);

    const deck = ReactDeck;

    function getAnswer(ans) {
        setRow([...row, ans]);
        console.log(row)
        setCompleted(completed + 1);
    }

    return(
        <Container>
            <Top />
            <Fleshcards deck={deck} getAnswer={getAnswer} />
            <Footer total={total} completed={completed} row={row} />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FB6B6B;

    display: flex;
    justify-content: center;
    align-items: center;
`