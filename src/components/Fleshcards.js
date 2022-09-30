import styled from "styled-components"

export default function Fleshcards({ deck }) {
    return(
        <Container>
            {deck.map((card, i) => <Card key={i} card={card}/>)}
        </Container>
    )
}

function Card({ card }) {
    const {question, answer} = card;

    return(
        <></>
    )
}

const Container = styled.div`
    width: 80vw;
    height: 100vh;
    padding: 120px 0 0 0;
    background-color: #FB6B6B;
`