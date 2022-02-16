import { CardBody, Avatar, Conteudo, Nome, Salario } from "./style";

export default function Card() {
    return (
        <CardBody>
            <Avatar src="http://roger.dev.br/img/avatar.3070f3de.jpg" alt="Avatar" />
            <Conteudo>
                <Nome>John Doe</Nome>
                <p>Architect & Engineer</p>
                <Salario>Salário: R$ 1000,00</Salario>
            </Conteudo>
        </CardBody>
    );
}