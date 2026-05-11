import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const nav = useNavigate();
    return (
        <section>
            <h1>Página não encontrada (404)</h1>
            <p>Desculpe — a página que você procura não existe.</p>
            <div style={{ marginTop: 16 }}>
                <button onClick={() => nav(-1)}>Voltar</button>
            </div>
        </section>
    );
}
