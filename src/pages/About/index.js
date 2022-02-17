import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Titulo from '../../components/Titulo';
import lista from '../../data/people';

export default function About() {
    document.title = 'Sobre';

    const eu = lista.find((f) => f.nome === "Roger Medeiros");

    return (
        <div>
            <Titulo titulo='Sobre mim' />

            <Link to='/'>Texto</Link>

            <br />

            <Card
                pessoa={eu}
            />
        </div>
    );
}
