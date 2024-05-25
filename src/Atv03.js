import Gallery from './Gallery';
import Compo from './Compo';
import {Link} from "react-router-dom";
import App from './App';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';





export default function Atv03() {
    return (
        <>
        <h1>Atividade 03</h1>
        <Gallery />
        <Compo />
        <App />
        <App1/>
        <App2/>
        <App3/>
        <App4/>
        <App5/>
       

        


        <br />
        <Link to="/">retornar a pagina inicial</Link>
        </>
    );
}
