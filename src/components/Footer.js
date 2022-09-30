import styled from "styled-components"

export default function Footer({ total, completed }) {
    return(
        <Container>
            <>{completed}/{total} CONCLUIDOS</>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    font-family: 'Recursive', serif;
    padding: 25px 0;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    position: fixed;
    bottom: 0;
    z-index: 1;
`