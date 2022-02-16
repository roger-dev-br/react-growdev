import Card from "../Card";
import './style.css';

export default function ListaPessoas(props) {
    return (
        <div className="lista">
            {props.pessoas.map((pessoa) => (
                <Card />
            ))}
        </div>
    );
};