import { useState } from "react";
import GlobalStyle from "../style/globalStyle";
import Game from "./Game";
import Welcome from "./Welcome";

export default function App() {
    const [start, setStart] = useState(false);

    return(
        <>
            <GlobalStyle />
            {!start ?
                <Welcome setStart={setStart} /> :
                <Game />
            }
        </>
    )
}