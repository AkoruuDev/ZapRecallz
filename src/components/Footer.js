import styled from "styled-components";

import wrong from "../images/iconwrong.png"
import almost from "../images/iconalmost.png";
import zap from "../images/iconzap.png";

export default function Footer({ total, completed, row }) {
    return(
        <Container>
            <>{completed}/{total} CONCLUIDOS</>
            <RowFooter>{row.map((e, i) => <Row key={i} e={e} />)}</RowFooter>
        </Container>
    )
}

function Row({ e }) {
    if(e === 'wrong') {
        return(
            <Icon src={wrong} alt={e}/>
        )
    } else if(e === 'almost') {
        return(
            <Icon src={almost} alt={e}/>
        )
    } else {
        return(
            <Icon src={zap} alt={e}/>
        )
    }
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

const RowFooter = styled.div`
    display: flex;
    margin: 8px 0;
`

const Icon = styled.img`
    margin: 0 5px;
`