//import Avatar from './Avatar';
import Galeriadeimagens from './Galeriadeimagens';
import Toolbar from './Toolbar';
import Formulario2 from './Formulario2';
import {Link} from "react-router-dom";
import Formulario from './Formulario';
import Formulario3 from './Formulario3';
import List from './List';
import List3 from './List3';
import List2 from './List2';
import MoveC from './MoveC';
import CounterList from './CounterList';
import List4 from './List4';
import BucketList from './BucketList';
import Movingdot from './Movingdot';


export default function Atv04() {
    return (
        <>
        <h1>Atividade 04</h1>
        <Toolbar/>
        <Galeriadeimagens/>
        <Formulario/>
        <Formulario2/>
        <Formulario3/>
        <List/>
        <List2/>
        <MoveC/>
        <CounterList/>
        <BucketList/>
        <Movingdot/>
        
        <List3/>
        <List4/>
        
       
        
        


        <br />
        <Link to="/">retornar a pagina inicial</Link>
        </>
    );
}
