import { CardBody, Avatar, Conteudo, Nome, Salario } from "./style";

export default function Card({ pessoa }) {
    function ajustaValor(valor) {
        return valor.toFixed(2).replace(".", ",");
    }

    return (
        <CardBody>
            <Avatar src={pessoa.imagem} alt={'Foto de ' + pessoa.nome} />
            <Conteudo>
                <Nome corFonte={pessoa.cor}>{pessoa.nome}</Nome>
                <p>{pessoa.cargo}</p>
                <Salario valor={pessoa.salario}>
                    Salário: R$ {ajustaValor(pessoa.salario)}
                </Salario>
            </Conteudo>
        </CardBody>
    );
}