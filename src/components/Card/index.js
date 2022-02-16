import './style.css';

export default function Card() {
    return (
        <div class="card">
            <img src="http://roger.dev.br/img/avatar.3070f3de.jpg" alt="Avatar" width={100} />
            <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
                <h4>Salário: R$ 1000,00</h4>
            </div>
        </div>
    );
}