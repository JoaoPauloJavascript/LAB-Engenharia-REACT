import Contadorgenero from './Contadorgenero';

import {Link} from "react-router-dom";

export default function Atv02() {
    return (
        <>
        <h1>Atividade 02</h1>
        <Contadorgenero />

        <br />
        <Link to="/">retornar a pagina inicial</Link>
        </>
    );
}