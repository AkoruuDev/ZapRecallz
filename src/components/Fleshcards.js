import { useState } from "react";
import styled from "styled-components"

export default function Fleshcards({ deck }) {
    return(
        <Container>
            {deck.map((card, i) => <Card key={i} card={card} num={i+1} />)}
        </Container>
    )
}

function Card({ card, num }) {
    const [closed, setClosed] = useState(true);
    const [show, setShow] = useState(false);
    const {question, answer} = card;

    return(
        <CardBox>
            {closed ?
                <div onClick={() => setClosed(false)}>Pergunta {num}</div> :
                !show ?
                    <div onClick={() => setShow(true)}>{question}</div> :
                    <div>
                        {answer}
                        <Buttons>
                            <Red>Não lembrei</Red>
                            <Yellow>Quase esqueci</Yellow>
                            <Green>Zap</Green>
                        </Buttons>
                    </div>
                }
        </CardBox>
    )
}

const Container = styled.div`
    width: 80vw;
    height: 100vh;
    padding: 150px 0 0 0;
    background-color: #FB6B6B;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`

const CardBox = styled.div`
    width: 80%;
    padding: 20px 15px;
    margin: 10px 0;
    background-color: #FFFFFF;

    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`

const Button = styled.div`
    height: 35px;
    width: 30%;
    margin-top: 25px;
    border-radius: 8px;
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        box-shadow: 0 1px 5px 1px #a8a8a8;
    }
`
const Red = styled(Button)`
    background-color: #FF3030;
`
const Yellow = styled(Button)`
    background-color: #FF922E;
`
const Green = styled(Button)`
    background-color: #2FBE34;
`