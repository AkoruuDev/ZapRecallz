import { useState } from "react";
import styled from "styled-components"

import play from "../images/play.png"
import wrong from "../images/iconwrong.png"
import almost from "../images/iconalmost.png"
import zap from "../images/iconzap.png"

export default function Fleshcards({ deck, getAnswer }) {
    return(
        <Container>
            {deck.map((card, i) => <Card key={i} card={card} num={i+1} getAnswer={getAnswer} />)}
        </Container>
    )
}

function Card({ card, num, getAnswer }) {
    const [closed, setClosed] = useState(true);
    const [show, setShow] = useState(false);
    const [answered, setAnswered] = useState(false);
    const {question, answer} = card;
    const [thisCard, setThisCard] = useState('');

    function finishCard(ans) {
        getAnswer(ans);
        setThisCard(ans);
        setShow(false);
        setClosed(true);
        setAnswered(true);
    }

    return(
        <CardBox>
            {closed ?
                <ClosedCard num={num} setClosed={setClosed} answered={answered} thisCard={thisCard} /> :
                !show ?
                    <div onClick={() => setShow(true)}>{question}</div> :
                    <div>
                        {answer}
                        <Buttons>
                            <Red onClick={() => finishCard("wrong")}>Não lembrei</Red>
                            <Yellow onClick={() => finishCard("almost")}>Quase esqueci</Yellow>
                            <Green onClick={() => finishCard("zap")}>Zap</Green>
                        </Buttons>
                    </div>
            }
        </CardBox>
    )
}

function ClosedCard({ num, setClosed, answered, thisCard }) {
    return(
        <>
            {!answered ?
                <Start onClick={() => setClosed(false)}>
                    <p>Pergunta {num}</p>
                    <img src={play} alt={'play'} />
                </Start> :
                thisCard === 'wrong' ?
                    <Wrong>
                        <p>Pergunta {num}</p>
                        <img src={wrong} alt={'wrong'} />
                    </Wrong> :
                    thisCard === 'almost' ?
                        <Almost>
                            <p>Pergunta {num}</p>
                            <img src={almost} alt={'almost'} />
                        </Almost> :
                        <Zap>
                            <p>Pergunta {num}</p>
                            <img src={zap} alt={'zap'} />
                        </Zap>
            }
        </>
    )
}

const Container = styled.div`
    width: 80vw;
    height: calc(100vh - 200px);
    background-color: #FB6B6B;

    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }
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

const Start = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const Wrong = styled(Start)`
    color: #FF3030;
    font-weight: 700;
    text-decoration: line-through;
`

const Almost = styled(Start)`
    color: #FF922E;
    font-weight: 700;
    text-decoration: line-through;
`

const Zap = styled(Start)`
    color: #2FBE34;
    font-weight: 700;
    text-decoration: line-through;
`