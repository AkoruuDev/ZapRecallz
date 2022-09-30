import styled from "styled-components"
import logo from "../images/logo.png";

export default function Welcome({ setStart }) {
    return(
        <Conteiner>
            <div>
                <img src={logo} />
                <Title>ZapRecall</Title>            
            </div>
            <Button onClick={() => setStart(true)}>Começar Recall</Button>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FB6B6B;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Title = styled.h1`
    margin: 20px 0;

    font-family: 'Righteous', cursive;
    font-size: 36px;
    color: #FFFFFF;
`

const Button = styled.div`
    padding: 20px 50px;
    background-color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #D70900;

    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    color: #D70900;

    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 10px 4px #D90922;
    }
`